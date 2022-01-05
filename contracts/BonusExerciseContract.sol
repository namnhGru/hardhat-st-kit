// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

contract BonusContract {
    uint256 public number = 0;

    function setNumber(uint256 _number) public {
        number = _number;
    }
}