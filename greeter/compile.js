const path = require('path');
const fs = require('fs');
const solc = require('solc');

const greetingsPath = path.resolve(__dirname, "contracts", "greetings.sol");

const compilerInput = {
    language: "Solidity",
    sources: {
        'greetings': {
            content: fs.readFileSync(greetingsPath, 'utf8') 
        },
    },
    settings: {
        outputSelection: {
            "*": {
                // ABI and evm bytcode output
                "*": ["abi", "evm.bytecode"]
            }
        }
    }
};

// console.log(solc.compile(JSON.stringify(compilerInput)));

// Export compiler output so that it can be used by our testing script

module.exports = solc.compile(JSON.stringify(compilerInput));