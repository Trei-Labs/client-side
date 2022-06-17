import React, { useEffect, useState } from 'react';
import { useContract,useSigner } from 'wagmi';
import BuyGetABI from '../contracts/ABI/BuyGetABI.json'

const MerchantDisplay =() =>{

    const { data: signer, isError, isLoading } = useSigner();
    const[merchants,setMerchants]=useState([]);

    const contract = useContract({
        addressOrName: '0x5d6427c20fDD31Bd722e41292E69452C28095EC8',
        contractInterface: BuyGetABI,
        signerOrProvider: signer,
    });

    const showMerchants = async()=>{
        var listcount = await contract.getCount();
        var parselist = listcount.toString();
        console.log(parselist)
        setMerchants([]);
        for(let i =1;i<=parselist;i++){
            var merchant = await contract.getMerchants(i);
           {
                setMerchants((merchants)=>[...merchants,merchant])
            }
        }
        console.log(merchants)
    }

    return(
        <div>
            <button className='bg-indigo-800 p-[10px]  rounded-xl text-white ' onClick={showMerchants} >Refresh List</button>
            <div >
                    {
                    Object.keys(merchants).map((merchant, index) => (
                        <div className='p-[5px] mt-5 bg-gray-100 rounded-xl shadow-sm border-2 ' >
                            <label className='px-5 text-[18px]' > Program Name :  {(merchants[index].prgname)}</label>
                            <label className='px-5 text-[18px]' > Minimum Purchase Amount :  {(merchants[index].minpurchase).toString()}</label>
                            <label className='px-5 text-[18px]' > Minimum Purchase Count :  {(merchants[index].mincount).toString()}</label>
                        </div>
                    ))
                    }                
            </div>
        </div>
    )
}

export default MerchantDisplay;