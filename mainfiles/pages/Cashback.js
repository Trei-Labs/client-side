import React, { useEffect, useState } from 'react';
import { FaEthereum} from "react-icons/fa";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount,useBalance,useProvider,useContract,useSigner } from 'wagmi';
import GetAccount from '../src/hooks/GetAccount';
import GetBalance from '../src/hooks/GetBalance';
import CashBackABI from '../src/contracts/ABI/CashBackABI.json'
import CashBackDisplay from '../src/commons/CashBackDisplay';

const Cashback =()=>{

    const[amount,setAmount]=useState(null);
    const[count,setCount]=useState(null);
    const[percent,setPercent]=useState(null);    

    const { data: signer, isError, isLoading } = useSigner();

    const contract = useContract({
        addressOrName: '0x4d9495061bFF3E88BFF596A3aaA483B475A8c015',
        contractInterface: CashBackABI,
        signerOrProvider: signer,
    });
    
    const addPrg =()=>{
        contract.addProgram(amount,count,percent);
    }

    return(
        <>
        <div className='flex justify-center items-center flex-col bg-gray-100 w-[100vw] h-[fit-content] py-11' >
            <div className=' px-[100px] flex items-center flex-row w-[100vw] justify-between ' >
                <div className='flex flex-row w-[60%] h-[310px] p-[20px] bg-white rounded-xl border-2 mr-[20px]' >
                    <div className='w-[50%]' >
                        <p className='text-[15px]' >Account Details - Wagmi Provider</p>
                        <br/>
                        <p className='text-[30px] font-bold ' >Business Account</p>
                        <p className='text-[13px]' >Address : {GetAccount()}</p>
                        <button className='mt-[40px] bg-indigo-800 text-white p-[13px] rounded-xl hover:bg-indigo-600 ' >Create Payment Link</button>
                    </div>
                    <div className='w-[50%] text-end' >
                        <p className='text-[15px]' >Available Funds</p>
                        <br/>
                        <label className='text-[20px]' >{GetBalance()}</label>
                    </div>
                    
                </div>
                <div className=' flex flex-col justify-center items-center w-[40%] h-[fit-content] bg-white rounded-xl border-2 p-[20px] ' >
                    <p className='font-bold text-[20px]' >CashBack Details</p>
                    <br/>
                    <input onChange={e => setAmount(e.target.value)} className='w-[80%] border-2  rounded-[10px] p-1 px-2 ' placeholder='Minimum Amount' />
                    <input onChange={e => setCount(e.target.value)} className='w-[80%] border-2  rounded-[10px] p-1 px-2 mt-5 ' placeholder='Minimum Purchase Count' />
                    <input onChange={e => setPercent(e.target.value)} className='w-[80%] border-2  rounded-[10px] p-1 px-2 mt-5 ' placeholder='% Cashback' />
                    <button onClick={addPrg} className='bg-indigo-800 text-white p-[10px] rounded-[15px] mt-5 hover:bg-indigo-600 ' >Create Program</button>
                </div>
                
            </div>
            
        </div>
        <CashBackDisplay/>
        </>
    )
}

export default Cashback