### preparation

Install anchor  
https://solana.com/ja/docs/intro/installation

confirm anchor version  
`anchor --version`

### 1 create an anchor project

`anchor init my-project`

### 2 build the program

`anchor build`

### 3 test the program

#### 1 run a test validator

`solana-test-validator`

#### 2 run the test code

`anchor test --skip-local-validator`

-> this is because validator is already running

#### 3 look at in the explorer

https://explorer.solana.com/?cluster=custom

#### 4 stop running validator

If you finish using test validator , stop it

### 4 deploy at the devnet

#### 1 get test token

https://faucet.solana.com/

#### 2 change provider in Anchor.toml

- cluster
- wallet

#### 3 deploy

`anchor deploy`
