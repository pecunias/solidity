let fs = require('fs');
const Web3 = require('web3');

let web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('HTTP://127.0.0.1:7545'));

let contractAddress = "0x8b54DAe6b898bcBd87eCf664C60e36cee3999802";
let fromAddress = "0x03c08cd7Cc199325e15e01856163bc7220De87b5";

let abiStr = fs.readFileSync('contracts_greetings_sol_Greetings.abi', 'utf8');
let abi = JSON.parse(abiStr);

// Object that represenets a deployed smart contract
let greeter = new web3.eth.Contract(abi, contractAddress);

async function sendTransaction() {
    console.log("Getting greetings");
    getGreetings = await greeter.methods.getGreetings().call();
    console.log(getGreetings);

    console.log('changing greetings')
    result = await greeter.methods.setGreetings("hi there").send({from: fromAddress});
    console.log(result);

    console.log("getting greetings");
    getGreetings = await greeter.methods.getGreetings().call();
    console.log(getGreetings);
}

sendTransaction()
    .then(() => {
        console.log("done")
    })
    .catch((error) => console.error(error));

