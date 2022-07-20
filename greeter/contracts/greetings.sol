// SPDX-License-Identifier: ISC

// define acceptable compiler version
pragma solidity ^0.8.15;

// contract definition
contract Greetings {
    // string that can be set using the constructor or setter method
    string message;

    // Memory keyword implies that this variable's lifetime is just for the duration of this function call
    
    // Not using public keyword in constructor, because:
    // Constructors are run only once, when the contract is initially deployed. 
    // They can't be called at a later time, so aren't "visible" in the sense that variables or functions are.

    constructor (string memory initialMessage) {
        message = initialMessage;
    }

    function setGreetings (string memory newMessage) public {
        message = newMessage;
    }

    // view: promise that this particular function will not modify the state of the contract in any way
    function getGreetings () public view returns (string memory) {
        return(message);
    }
}
