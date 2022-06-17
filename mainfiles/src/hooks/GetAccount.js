import React from 'react';
import { useAccount } from 'wagmi';

const GetAccount =() =>{
    const{data}=useAccount();
    var addr = data?.address;
    return addr;
}

export default GetAccount