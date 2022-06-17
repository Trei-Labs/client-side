//SPDX-License-Identifier:MIT-License
pragma solidity ^0.8.0;

contract CashBack{

    uint256 prgid;
    uint256 temppurchasecount;
    uint256 purchasecount;
    uint256 lastpurchase;

    struct Program{
        uint256 prgid;
        address creator;
        uint256 minpurchase;
        uint256 minpurchasecount;
        string percentage;
    }

    struct Customer{
        uint256 prgid;
        address creator;
        address customer;
        uint256 lastpurchase;
        uint256 purchasecount;
    }

   mapping(uint256 => Program) public programs;
   mapping(uint256 => Customer) public customers;

    function addProgram(uint256 _minpurchase,uint _minpurchasecount,string memory _percentage)public{
        ++prgid;
        programs[prgid]=Program(prgid,msg.sender,_minpurchase,_minpurchasecount,_percentage);
    }

    function addCustomer(uint256 _key,uint256 _purchaseamt) public{
        require(msg.sender != programs[_key].creator);
        require(_key <= prgid);
        if(_purchaseamt >= programs[_key].minpurchase){
            purchasecount++;
        }
        lastpurchase+=_purchaseamt;
        customers[_key]=Customer(_key,programs[_key].creator,msg.sender,_purchaseamt,purchasecount);
    }

    function getProgram(uint256 _key) public view returns(Program memory){
        return programs[_key];
    }

    function getCustomer(uint256 _key) public view returns(Customer memory){
        return customers[_key];
    }
}