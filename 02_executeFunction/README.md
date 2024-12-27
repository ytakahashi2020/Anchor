## 1 deploy a program

### 1 create an anchor program

`anchor init <project name>`

### 2 set the hello anchor program

https://solana.com/ja/docs/programs/anchor/program-structure

### 3 build

`anchor build`

### 4 deploy in the devnet

#### 1 set devnet in Anchor.toml

- cluseter
- wallet

#### 2 deploy

solana faucet is here

https://faucet.solana.com/

`anchor deploy`

#

## 2 execute the program function

### 1 create a connection

Connection from @solana/web3.js
clusterApiUrl from @solana/web3.js

### 2 create a wallet from your file

#### 1 create a walletFile

using fs

#### 2 create a keypair

Keypair.fromSecretKey

#### 3 create a wallet

Wallet from @coral-xyz/anchor

### 3 set provider

#### 1 create a provider

AnchorProvider from @coral-xyz/anchor

#### 2 set the provider

setProvider from @coral-xyz/anchor

### 4 create a program

#### 1 get idl

#### 2 get program type

#### 3 create a program

Program from @coral-xyz/anchor

### 5 execute the function

#### 1 prepare

- new account using Keypair
- data using BN
  -> import BN from "bn.js";

#### 2 execute

- program.method.<functionName>.accounts().signers().rpc()
- accounts  
  1 new_account
  2 signer
  3 systemProgram
- signers
