//SPDX-License-Identifier:MIT-License
pragma solidity ^0.8.0;

contract BuyGet{

    uint256 uid=0;

    struct Merchant{
        address creator;
        string prgname;
        uint256 mincount;
        uint256 minpurchase;
    }

    struct Customer{
        uint256 currentpurchase;
        uint256 totalcount;
        uint256 eligible;
    }

    mapping(uint256 => Merchant) public merchants;
    mapping(address => mapping(uint256 => Customer)) public customers;

    function addMerchant(uint256 _mincount,string memory _prgname, uint256 _minpurchase)public{
        ++uid;
        merchants[uid]=Merchant(msg.sender,_prgname,_mincount,_minpurchase);
    }

    function addCustomer(uint256 _currentpurchase,uint256 _key)public{
        require(msg.sender != merchants[_key].creator);
        uint256 tempcount = customers[msg.sender][_key].totalcount;
        if(_currentpurchase >= merchants[_key].minpurchase) tempcount++;
        customers[msg.sender][_key]=Customer(_currentpurchase,tempcount,0);   
        if(customers[msg.sender][_key].totalcount >= merchants[_key].mincount) customers[msg.sender][_key].eligible=1;
    }

    function getMerchants(uint256 _key) public view returns(Merchant memory){
        return merchants[_key];
    } 

    function getCustomer(uint256 _key)public view returns(Customer memory){
        return customers[msg.sender][_key];
    }

    function getCount() public view returns(uint256){
        return uid;
    }

}