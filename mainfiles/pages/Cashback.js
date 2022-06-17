import React, { useEffect, useState } from 'react';
import { FaEthereum} from "react-icons/fa";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useAccount,useBalance,useProvider,useContract,useSigner,useSendTransaction } from 'wagmi';
import GetAccount from '../src/hooks/GetAccount';
import GetBalance from '../src/hooks/GetBalance';
import CashBackABI from '../src/contracts/ABI/CashBackABI.json'
import CashBackDisplay from '../src/commons/CashBackDisplay';
import BuyGetABI from '../src/contracts/ABI/BuyGetABI.json'
import { ethers } from 'ethers';


const Cashback =()=>{

    const[amount,setAmount]=useState(0);
    const[count,setCount]=useState(null);
    const[purchase,setPurchase]=useState(null);  
    const[toaddr,setToaddr]=useState('');  
    const[sign,setSign]=useState(null);

    const { data: signer, isError, isLoading } = useSigner();

    const contract = useContract({
        addressOrName: '0x5d6427c20fDD31Bd722e41292E69452C28095EC8',
        contractInterface: BuyGetABI,
        signerOrProvider: signer,
    });

    const getPurchase = async ()=>{
        const pur = await contract.getMerchants(1);
        setCount(pur[2].toString());
        setPurchase(pur[3].toString());
        setToaddr(pur[0].toString());
    }

    const addTx=()=>{
        contract.addCustomer(amount*1000000000000000000,1)
    }

    const sendTx=()=>{
        sendTransaction();
        addTx();
    }
    
   
    const { sendTransaction } =
    useSendTransaction({
      request: {
        to: toaddr.toString(),
        value: `${(amount*1000000000000000000).toString()}`
      },
    })
    

    getPurchase();

    return(
        <>
        <div className='flex justify-center items-center flex-col bg-gray-100 w-[100vw] h-[fit-content] py-11' >
            <div className=' px-[100px] flex items-center flex-row w-[100vw] justify-between ' >
                <div className='flex flex-row w-[60%] h-[270px] p-[20px] bg-white rounded-xl border-2 mr-[20px]' >
                    <div className='w-[50%]' >
                        <p className='text-[15px]' >Account Details</p>
                        <br/>
                        <p className='text-[30px] font-bold ' >Customer Account</p>
                        <p className='text-[13px]' >Address : {GetAccount()}</p>
                    </div>
                    <div className='w-[50%] text-end' >
                        <p className='text-[15px]' >Available Funds</p>
                        <br/>
                        <label className='text-[20px]' >{GetBalance()}</label>
                    </div>
                    
                </div>
                <div className=' flex flex-col justify-center items-center w-[40%] h-[fit-content] bg-white rounded-xl border-2 p-[20px] ' >
                    <p className='font-bold text-[20px]' >Send Payment</p>
                    <br/>
                    <p>Youre eligible for Buy {count} Get 1 Offer 🎉</p>
                    <p>Minimum Purchase Amount : {purchase} MATIC</p>
                    <p></p>
                    <br/>
                    <input onChange={e => setAmount(e.target.value)} className='w-[80%] border-2  rounded-[10px] p-1 px-2 ' placeholder='Enter Amount in MATIC' />
                    <button onClick={addTx} className='bg-indigo-800 text-white p-[10px] rounded-[15px] mt-5 hover:bg-indigo-600 ' >Confirm Pay</button>
                </div>
                
            </div>
            
        </div>
        <CashBackDisplay/>
        </>
    )
}

export default Cashback