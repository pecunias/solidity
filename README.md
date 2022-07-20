# Notes

Blockchain - Digital store of value
Peer-to peer transactions in decentralized network

Ethereum - Asset and utility
- Smart contracts
  - Self executing sets of instructions written in code
  - Needs real world data

Blockchain oracles exist to provide this real world data



Mixing these On-chain logic and Off-chain data is hybrid smart contract

Chainlink
- Allows for unlimited smart contract customization
- Hybrid smart contracts
- Has blockchain oracles

Smart contracts - hybrid contracts - decentralized apps


1. Decentralized
2. Transparancy & flexibility
3. Speed and efficiency
4. Security & immutability
5. Removal of counterparty risk
6. Trust minimized agreements


DAO - decentralized autonomous organisations
- Live online
- Governance on-chain
----------------------------------------------

ICTTrainingen:
#Blockchain & Ethereum: Introduction

## Exercise
## Enumerate some characteristics of blockchains
- Immutability of records
- Sequence of blocks that contain transactions that are linked by cryptography
- Maintained by a Network of nodes

-- Data structure to store records (In ethereum that's transactions)
-- Continuously growing in an unbounded manner
-- Mechanism for nodes to reach consensus (by algorithm)
-- Every record can be verified


## Identify some attributes of Ethereum
- Smart contracts
- Transactions cost gas fees
- Decentralized network
- Public network

-- Blockchain-based platform
-- open source
-- explicit mechanisms for untrusted nodes (by proof of work)


# List the two types of Ethereum accounts
- Externally owned accounts (EOA)
-- Possesses ether balance and can send transactions
-- Maps to a public/private key pair
-- does not iclude code
-- associated with an account nonce (counter of transactions)

## - Contract accounts
-- possesses ether balance
-- does indeed include code
-- can modify its own state (sending ether)

## Detail the constituents/parts of an Ethereum transaction
- Two parties; sender and receiver
- Sender pays gas fees

-- Sender address
-- Recipient address
-- Value of assets being transferred
-- gas price: incentive for transaction to be mined
-- gas limit

## Enumerate the rewards which a node may receive for mining transactions
- Newly minted Ether whenever he founds the new block
- All gas fees from the previous founded block (has used x gas price)

Extra notes:
After a transaction is initiated, it gets sent to a pool of unverified transactions
Linked by Cryptographic hash of previous block

-----------------
# Blockchains & Ethereum: Performing Transactions

## Cryptographic hashing
How is the relationship defined?

Block contains 
Linked by Cryptographic hash of previous block
Timestamp
Transaction data
Metadata

## Hash algorithm
input message ->
hash function -> 
hash value

## Hash value
Message digest/digest/digital fingerprint/checksum

## Ideal hash function properties
- Easy to compute hash value given message
- Low probability of hash collisions (when two different messages have same hash value)
- impossible for malicious entity to recreate message given only the hash value
Cryptographic hash function - 

SHA-256 (secure hash algorithm), 256 = number of bits in digest/hash output (always 256 bits in length)


## Chains of blocks
Each node stores hash of entire ledger
Divide ledger into blocks to simplify checking each ledger

Ledger is now a chain of blocks

1st block in the blockchain is the genesis block


# Merkle trees
Optimize search transactions
(comparing blocks with other ledgers)

## Tree vs. list
Problem: search block to find transaction that caused hash mismatch

If transactions are represented as a list, this problem is O(N)
- The time taken for the search is directly proportional to the number of records

If transactions are represented as a tree, this improves to O(log N)
In mathematics, the logarithm is the inverse function to exponentiation. That means the logarithm of a given number is the exponent to which another fixed number, the base, must be raised, to produce that number.

## Merkle tree
Tree data structure, in which every leaf node is labelled with the hash of a data block and every non-leaf node is labelled with the cryptographic hash of the labels of its child nodes

Top is merkle root (ABXY) (current transaction hash to be added in the block input)
underneath Hash AB/Hash XY
Underneath Hash A/B - Hash X/y
Underneath transaction A/B - Transaction X/y

## Order matters
Merkle tree encapsulates entire state of ledger so far
Each node computes this tree while verifying transactions
Order of transactions in the tree matters in calculating merkle root hash

# Transaction verification
## Verifying sender identity
Verification process while unverified transactions are added to a block
- Identity sender and transaction integrity
- Confirm that sender owns assets to send
- Check transaction nonce (check if it is not a replay)

Every transaction is broadcasted accross the network
Consensus is important

# Digital Signatures and identity
Accounts
Key pair
Private key (pin code)
Public key (rekeningnummer)

Sender sends across two messages
- Digitally signed transaction
- Raw unsigned transaction

Three purposes
- Authentication
- non-repudiation (no backsies)
- Integrity (not tampered)

Transaction hash + sender's private key = Signed transaction from sender (encryption)
Sender's public key + signed transaction (decryption)

## public and private blockchain network
private - selection criteria - faster converge - less fraud
public - open - everyone - slower to converge on consensus - more fraud

# verifying sender's balance
Balance must be:
- assets sent
- Gas limit x gas price

## Mechanism
State database maintained by each node

# Check Transaction nonce
Number used once
Unique integer ID
Only incremented

Uses of nonce
- ordering
- Prevent double counting


----
Exercise
## Enumerate steps in transaction verifcation
- Verify sender identity and transaction integrity
- Confirm that sender has the assets
- Check transaction nonce

## Describe the ideal cryptograhpic hash function
- Easy to compute hash given message
- Low probability of hash collisions
-- impossible for malicious entity to recreate message given only the hash value

## Compare centralized and distributed ledgers
- centralized has one ledger which nodes store, single point of failure, easier to synchronize
- distributed ledger have nodes that store hash of own ledger, harder to synchronize

## Distinguish between public and private blockchain networks
- Public - everyone can join the network - generally more fraud than private networks - generally more nodes than private networks, --slower to converge to consensus
- Private - joinable by selection criteria - generally less fraud than public networks - generally less nodes than public networks, --faster to arrive at a consensus

--------------------------------------------
# Mining and smart contracts in Ethereum
## Transaction ordering and consensus
Order consensus 
two consesensus algorithms
- Proof of work
- Proof of stake

## Proof of work consensus
Determining the transactions to be written to a block and their order is a privilege, not a right
Do work, and prove it

## gas 
- work needed to verify a transaction
- transaction contains gas (and gas limit)

EVM (Ethereum virtual machine) runs during verification protocol (computes gas price)
The work is: find the proof of work nonce:
Each miner has to find a nonce that satisfies an arbitrary, difficult condition can only be achieved by trials-and-error

Finding the proof of work nonce

Block hash = outcome of hash function:
- Proof of work nonce
- previous block hash
- current transaction hash
- other metadata
  
Target hash is always known
Trial and error by ordering transactions to find this target hash

## After the win
- Each miner is searching its own nonce
- once found, broadscasts to all nodes
- once verified, miner clains transaction prize

Other nodes:
- receive broadcast claiming prize
- stop searching their own
- verify victory of claim
- update own blockchain

Ignoring a broadcast has a costt
- out of sync, 
- loses chance of climing future prizes

## Beyond proof of work
PoW (Proof of work)
- 51% attack
- Electricity costs/waste

PoS
- Not able to be attacked by 51%
- Deposit tokens, one of the tokens gets picked up at random, and that node that deposited has privilege of writing down the next block to the blockchain

Back to blockchain capabilites:
- allows multiple parties to initaite transactions
- no need for a trusted central authority
- includes mechanisms to ensure transaction are verified and secure

## Smart contracts
Stored inside a blockchain (like a transaction)
- solidity (programming language)

## Solitidy
Solididy is a high-level language whose code compiles to Ethereum bytecode and that can be executed on any node running the Ethereum Virtual machine

Solidity Compiled to Etheum Bytecode executed to Ethereum VM

Features of Solidity
- Comments
- Types
  - Address type (Ethereum)
  - Floating point not supported
  - Data structures
  - Key-value pairs
- Events (logging/event listeners)
  - allows contract to write to the Log, not able to read
- Functions (read and write for example)
  - Constant is a read operation which is performed and a call to the function does not chane the state of the contract or the blockchain
  - Transactional - changes state and costs gas
- Function modifiers (checks if function should be executed or not)
  - Change behavior of a function
  - Checks if a condition is there before a function can be executed
  - Modifiers are inheritable properties of functions
  - Each function can belong to multiple modifiers
- Inheritance (A class can reuse the properties and methods of another class. This is called inheritance in TypeScript.) - 
class Employee extends Person {
    //..
}
  - Inherit other smart contracts

- Opcode version
- Low-level human readable instructions of the program

## Gas - the measure of complexity of transactions
Gas is a unit to measure the computational complexity of an operation

## Exercise
Describe the proof of work consensus algorithm
- Each miner has to find a nonce that matches a arbitrary, can only be achieved by trial and error
-- contruct a block that includes: transaction dta, hash of previous block, metadata and proof of work nonce
-- hash of block must be less than target hash
-- hard to reverse engineer
-- New block is broadcasted to the network

List the flaws with the proof of work algorithm
- Electricity costs/waste (as one reaps rewards)
- 51% attack is possible (majority takes over network)

Identify some properties of smart contracts
- Stored in blockchain
- specify, Verify and enforce contractual terms (expressed in code)
-- public
-- no third-party needed


Recall the functions of the gas price and gas limit fields in a transaction
- Pay the costs of amount of work to miners
- Gas limit is maximum amount of gas able to be paid
- Gas price is determined
-- Gas price is price that initiator is willing to pay perunit of complexity
-- Transation fee directly propertional to gas price
-- higher price increases likelihood of being picked up byu miner
-- gas limit is  ceiling on gas to be consumed for transaciton, limits ether spent on transaction, specifying low limit increases risk of transaction not completing

----------------------------------
# Storing data in Ethereum
## States in Ethereum
Data needed by nodes
- Account state (Needed to verify transactions)
  - Maps account address to ether balance
  - Account nonce to prevent replay attacks
  - storageRoot
  - code hash
- Smart contracts
  - needed to run transactions
  - bytecode to be sent to EVM
  - Token balance for contract

EOA has eteher balance, can send transactions, is defined by private key, has no associated code,
has account nonce

Contract accounts, has ether balance, has associated code, code can be executed, can modify own state

how is the state stored?

## Merkle Patricia Tries - The Trie data Structure
Trie data structure
A trie or prefix tree is a structured tree data structure used to store associative arrays (eg maps) where the keys are of type string

(D) -> (O - 256)
|
V
(E) -> (A) -> (L - 4) -> (E) -> (R - 9)
|
V
(N - 12)

Trie
Benefits
- Efficient lookup O(m) where m is the string length
- Superior to a hash table in the worst case: O(m) vs O(n) (n = number of key-value pairs)
- No collisions of different keys

Downsides
- Long chains can hurt lookup efficiency
- Storage requirements also increase if prefixes are unique

## Patricie Trie
A Patricia trie (or radix tree) is a space-optimized version of a trie data structure in which each non-leaf node with only one child is merged with is child
(combines nodes that have only one child)

## Merkle Patricia Trie
Three types of Nodes
- Extension node -prefix before branching (holds a single, non-empty key) and a single child. Compaction of layers redundant branch nodes 
Prefix value - Next node - hash of next node
- Branch node - different paths (two keys diverge (0-f))
- Leaf node - stores values - don't have childs

Leaf node
prefix 3
Key-end 1

## exercise 
Characterics of Ethereum
- Public 
- Open source
- smart contract functionality
- Network of blockchain
-- blockchain based platform
-- consensus to with with untrusted nodes

Identify some of the fields stored in the ethereum account state


- Nonce - EOA
- storageRoot - Merkle Patricia Trie
- Balance - 
- code hash ()

List the types of nodes in Ethereum's merkle patricie trie (3)
Leaf node - stores value
Branch node - diverges to different paths
Extension node - shared prefix value

--------------------------------
# Working with Ethereum: Smart contract development
## Ethereum test networks
Ethereum blockchain is on the main network

- Deploy contract on Ethereum Network
- Invoke contract methods

## Contract testing
Requirements:
- Simulate Main network
- Deploy contract on that network
- Interact with it

## Need for test networks
- Confirm logic defined in smart contracts
- Simulate
- Don't spend ether

Networks:
- Ropsten - proof of work/new block added to chain every 30s/Geth and parity cleints
- Kovan - Proof of authority for consensus, users proof their existence to receive ether from a faucet,
ether mined and distributed on demand, only parity client
- Rinkeby - Proof of authority algoruthm for consensus, receive ether from faucet when existence is proven, ether received with a social media post, supported by Geth

## The Ethereum virtual machine
- Runs instructions of a smart contract
- runs Ethereum bytecode - binary representation of contract
- Made up of multiple opcodes
- Each opcode transaltes to an action

# Compiling smart contracts
Invoking contract methods
- How do we invoke contract methods without the code
- Bytecode can be executed
- Cannot decipher methods
- details about methods and interfaces needed

# Ethereum clients
Ethereum nodes
- Full nodes
  - Verify transactions and blocks
  - Download copy of entire blockchain
  - Store and maintain blockchain state
  - Can participate in mining
  - Full Sync:
    - Get data starting from genesis block
    - Verify every block independently
    - Increased security
    - Only stores most recent state
  - Fast sync
    - Retrieve most recent blocks
    - Verify proof of work rather than each Tx
    - Verify all Tx and blocks after sync
    - Store intermediate sync after sync
- Light nodes
  - Do not store full blockchain or state
  - Do no verify transactions
  - Cannot participate in mining
  - Connect to full nodes or mining pools
  - Low resource requirements
- archive nodes
  - Contains the same data as full nodes
  - Stores intermediate states at each block
  - Quick lookup of historical states

## Running an Ethereum Node
Light node hardware
- Low resource, connect to full nodes/mining pools

Full node hardware
- Store blockchain and state
- Disk requirements are high

Archive nodes
- Contains the same data as full nodes
- stores itnermediate states at each block
- Quik loopup historical states

## Ethereum clients
Functions
- Connect to ethereum network
- Deploy and run smart contracts
- invoke transactions
- mine new blocks
- sync nodes
- maintain state
- provide user interface
- efficient use of resources

Geth, parity 
cpp ethereum
pyethapp

geth 
official reference implementation
written in golang
support for full light and archive nodes

Parity
- Third party
- rust
- pruning of historical data

ABI - application binary interface

## metamask
Infura <-> Metamask

Infura

Web3 injection (web3.js)
Interface to interact with ethereum
abstracts JSON-RPC calls 
Account detauils accessed via web3
Dapp can use injected web3

## truffle suite
- compile contracts
- deploy to desired network
- execute contract code
- test each feature

Simplicying contract development
pre-defined structure
aytomated testing, integration with ethereum main and test, set up and integrate with private networks

Drizzle for dapp uis


Suite includes:
truffle - build test deploy
ganache - private ethereum network
drizzle - libraries





---------
# Metamask & the Ethereum Wallet
Create account in MyCrypto (Ethereum Wallet) -> Use Rinkeby Test network
Ethereum Wallet is deprecated, so use MyCrypto -> not user friendly
Install Remix IDE -> deploy contract there!

https://dev.to/sparklesix/writing-and-deploying-a-solidity-smart-contract-to-rinkeby-test-network-2d0k

Exercise 
mnemonic phrase of a digital wallet
-- Pass phrace / seed phrase om BIP39 standard, used to recover account

Read operations - No transaction
Write operations - Invoke transaction

Transaction initiater -> msg.sender

---------------
# Geth client
## Running a local Ethereum network


## Geth
Install Geth client by installer
> geth --help

> mkdir geth-demo

## genesis.json
Necessary:
- Config field 
  - chainId -> replay attacks
- alloc field -> allocate an ether balance to various accounts
- difficulty - mining difficulty level
- gasLimit: limit of gas cost per block

Init blockchain using the genesis block definition
Create database for block storage

> geth --datadir ./datadir_node_0 init genesis.json
datadir means specify the directory in which this database will be created

## geth console
New account
>  geth account new --password .\password

 > geth account list

 Account created does not belong to the prinvate network created

 To update account password
 > geth account update < address >  

# geth javascript console
> geth --datadir ./datadir_node_0 console

> web3
JSON output
id & ip address of the node from which the geth console has been brought up

> eth 
Interact with ethereum blockchain and contracts

> net
info

> admin
Monitor 

> personal

> miner (full node)

## mining blocks using geth client
> eth.getblock(0)
Get the block

> eth.accounts

> personal.newAccount('123;)
Argument is password
Address

> eth.getBalance(eth.accounts[0])

> eth.blockNumber

> miner.start(1)
Arguments is parallel threads
Blocks will be added, mining rewards 

etherBase is automatically configured
Mining rewards go there

> eth.blockNumber
Updated to 4!

## invoking transactions with Geth
> eth.sendTransaction({from:eth.accounts[0], to:eth.accounts[1], value: web3.toWei(1, "ether")})
argument is JSON datastructure with details, Wei
Authentication needed/unlock

> personal.unlockAccount(eth.accounts[0], '123')

> web3.fromWei(eth.getBalance(eth.accounts[0]), "ether")

web3: Invalid sender

>> https://github.com/ethereum/go-ethereum#defining-the-private-genesis-state


Generate new genesis block

Exit:
Ctrl + c is the shortcut to clear the input prompt.Ctrl + d will exit the console when the input line is clear.

Alternatively, you can type the command exit

## Adding a node to a network
> geth --datadir ./datadir_node_0 console 
datadir is the node from where we went to start up console
networkid => id of the network we want to connect to (chainId value from genesis.json)

> admin.nodeInfo - to view information about the node

## Add new node
> geth --datadir ./datadir_node_1 init genesis.json
again

Bring up console of that node
geth --datadir ./datadir_node_1 --networkid 33 --port 30308 --nodiscover console 

## Fatal: Error starting protocol stack: Access is denied.
https://ethereum.stackexchange.com/questions/10616/fatal-error-starting-protocol-stack-access-is-denied
This occurs when you have another instance of geth already running.

There are 2 options:
- Simply disable the IPC interface for one or both of your geth intances. This is no problem if you don't use it (e.g. geth attach). The command would than be something like geth --genesis some.genesis.json --ipcdisable console
- Specify a custom name for the pipe with the --ipcpath argument. Make sure that it follows the naming convenstion Windows uses for named pipes and that its unique.

(add --ipcdisable).

> admin.nodeInfo

To add a node as a peer of the previous node which we had created, use node URI;
Available as the value of this enode property

> admin.peers
Peer nodes of particular nodes

> admin.addPeer("enode://7df9a259ccca3d780862681d1cccfe66ef8d70f93e94a2307ebf626f60aacf04dc65ade8154a444490ccfed554cc9771eb3a9a515a46f6c73386fd7eebfcfd40@127.0.0.1:30308?discport=0")
Add peer node to node

Use >admin.peers again


-------------
# Lifecycle of a smart contract

## Developing a contract with Solidity

