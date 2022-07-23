// const ganache = require('ganache-cli');

// web3 is used so we can interact with Ethereum Network
const Web3 = require('web3');
// For local test
// const web3 = new Web3(ganache.provider());

let web3 = new Web3();
// set with RPC endpoint of private ethereum network or public network
web3.setProvider(new web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));



let output = require('./compile.js');

let contract = JSON.parse(output).contracts.greetings.Greetings;

let abi = contract.abi;
let evm = contract.evm;

let accounts;
let greetings;

const defaultGreeting = "Hello World";

const deploy = async () => {
    accounts = await web3.eth.getAccounts();

    greetings = await new web3.eth.Contract(abi)
        .deploy({
            data: `0x${evm.bytecode.object}`,
            arguments: [defaultGreeting]
        })
        .send({
            from: accounts[0],
            gas: '1000000'
        })
        console.log('contract deployed to', greetings.options.address);
};
deploy();