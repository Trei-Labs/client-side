import React, { useState } from 'react';
import MerchantDisplay from '../src/commons/MerchantDisplay';
import GetAccount from '../src/hooks/GetAccount';
import GetBalance from '../src/hooks/GetBalance';
import { useContract,useSigner } from 'wagmi';
import BuyGetABI from '../src/contracts/ABI/BuyGetABI.json'


const BuyGet =() =>{

    const[name,setName]=useState('');
    const[amt,setAmt]=useState(null);
    const[purchase,setPurchase]=useState(null);

    const { data: signer, isError, isLoading } = useSigner();

    const contract = useContract({
        addressOrName: '0x5d6427c20fDD31Bd722e41292E69452C28095EC8',
        contractInterface: BuyGetABI,
        signerOrProvider: signer,
    });
    const AddBuyGet=()=>{

        contract.addMerchant(purchase,name,amt);
    
    }

    return(
        <div className='flex flex-col items-center bg-gray-100 w-[100vw] h-[fit-content] py-5 '  >
            <div className='flex flex-row w-[80%] h-[fit-content] bg-white mt-10 border-2 rounded-xl shadow-md p-[20px] ' >
                <div className='flex flex-col w-[50%]' >
                   <p className='text-[15px] font-bold ' >Account Details</p>
                    <p className='text-2xl' >Business Account</p>
                    <p>Address : {GetAccount()}</p> 
                </div>
                <div className='flex flex-col items-end w-[50%]' >
                   <p className='text-[15px] font-bold ' >Available Funds</p>
                    <p className='text-xl' >{GetBalance()}</p>
                </div>
                
            </div>
            <div className='flex flex-col w-[80%] h-[fit-content] bg-white mt-10 border-2 rounded-xl shadow-md p-[20px] ' >
                <p className='text-2xl font-bold ' >Programme Set Up</p>
                <br/>
                <p>Program Name : <input onChange={e=>setName(e.target.value)} className='w-[300px] p-[3px] px-[10px] border-2 rounded-xxl'  /></p>
                <p className='mt-4' >Minimum Amount : <input onChange={e=>setAmt(e.target.value)} className='w-[300px] p-[3px] px-[10px] border-2 rounded-xxl'  /></p>
                <p className='mt-4' >Minimum Purchases Required : <input onChange={e=>setPurchase(e.target.value)} className='w-[300px] p-[3px] px-[10px] border-2 rounded-xxl'  /></p>
                <button onClick={() => AddBuyGet(name,amt,purchase)} className='px-4 py-2 mt-5 bg-indigo-800 w-[fit-content] text-white hover:bg-indigo-500 rounded-xl '  >Launch Program !</button>
            </div>
            <div className='flex flex-col w-[80%] h-[fit-content] bg-white mt-10 border-2 rounded-xl shadow-md p-[20px] ' >
                <p className='text-2xl font-bold ' >Current Programs</p>
                <br/>
                <MerchantDisplay/>
            </div>
        </div>
    )
}

export default BuyGet;