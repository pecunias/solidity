const assert = require('assert');
const ganache = require('ganache-cli');

// web3 is used so we can interact with Ethereum Network
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

let output = require('../compile.js');

let contract = JSON.parse(output).contracts.greetings.Greetings;
let abi = contract.abi;
let evm = contract.evm;

let accounts;
let greetings;

beforeEach(async () => {
    accounts = await web3.eth.getAccounts();

    console.log(`--abi--
                 ${abi}`);

    console.log(`--evm--
                ${evm}`);
    
    // Initialize contract
    greetings = await new web3.eth.Contract(abi)
        .deploy({
            data: `0x${evm.bytecode.object}`,
            // use argument that will be picked up by constructor of the script
            arguments: ["Hello World"]
        }).send({
            from: accounts[0],
            gas: '1000000'
        })
});

describe('greetings', () => {
    it('deploys a contract'), () => {
        console.log(greetings.options.address);
        // Check if it is non-null
        assert.ok(greetings.options.address);
    }
});