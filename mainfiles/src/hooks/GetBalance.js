import React from 'react';
import { useBalance } from 'wagmi';
import GetAccount from './GetAccount';

const GetBalance =() =>{
    const{data}=useBalance({
        addressOrName: `${GetAccount()}`
    })
    var bal = (data?.formatted) + "  " + data?.symbol;
    return bal;
}

export default GetBalance;