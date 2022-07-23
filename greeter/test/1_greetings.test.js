
const assert = require('assert');
const ganache = require('ganache-cli');

const Web3 = require('web3');
// Initialize web3 interface with a private network,
// 10 address will be made with each 100 ether
const web3 = new Web3(ganache.provider());

let accounts;

// Code execution will not proceed before value has been returned
beforeEach(async () => {
    accounts = await web3.eth.getAccounts();
});

// beforeEach(() => {
//     // accounts created on private network
//     web3.eth.getAccounts()
//         .then(fetchedAccounts => {
//             console.log(fetchedAccounts);
//         })
// });

describe('Greetings', () => {
    it ('deploys a contract', () => {
        console.log(accounts);
    });
})

// Test asserts
// class Car {
//     park(){
//         return 'stop';
//     }

//     drive() {
//         return 'vroom';
//     }
// }

// let car;

// beforeEach(() => {
//     car = new Car();
// });

// describe('car class', () => {
//     it('can park', () => {
//         assert.equal(car.park(), 'stop');
//     });

//     it('can drive', () => {
//         assert.equal(car.drive(), 'vroom');
//     });
// });