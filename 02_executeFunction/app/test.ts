import {
  Wallet,
  AnchorProvider,
  setProvider,
  Program,
} from "@coral-xyz/anchor";
import {
  Keypair,
  Connection,
  clusterApiUrl,
  SystemProgram,
  TransactionSignature,
} from "@solana/web3.js";
import fs from "fs";
import type { HelloAnchor } from "../test-project/target/types/hello_anchor.js";
import idl from "../test-project/target/idl/hello_anchor.json";
import BN from "bn.js";

const connection = new Connection(clusterApiUrl("devnet"), "confirmed");

const walletFile = JSON.parse(
  fs.readFileSync("/Users/ytakahashi/.config/solana/id.json", "utf8")
);

const keyPair = Keypair.fromSecretKey(new Uint8Array(walletFile));

const wallet: Wallet = new Wallet(keyPair);

console.log(wallet.publicKey.toString());

const provider: AnchorProvider = new AnchorProvider(connection, wallet, {});
setProvider(provider);

const program = new Program(idl as HelloAnchor, provider);
const data = new BN(42);
// Generate keypair for the new account
const newAccountKp = new Keypair();

const signature: TransactionSignature = await program.methods
  .initialize(data)
  .accounts({
    newAccount: newAccountKp.publicKey,
    signer: wallet.publicKey,
    systemProgram: SystemProgram.programId,
  })
  .signers([newAccountKp])
  .rpc();

console.log(signature);
