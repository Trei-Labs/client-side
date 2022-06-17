import React from 'react';
import { useContract,useSigner } from 'wagmi';
import GetAccount from '../hooks/GetAccount';
import CashBackABI from '../contracts/ABI/CashBackABI.json'

const CashBackDisplay =() =>{

    const { data: signer, isError, isLoading } = useSigner();

    const contract = useContract({
        addressOrName: '0x4d9495061bFF3E88BFF596A3aaA483B475A8c015',
        contractInterface: CashBackABI,
        signerOrProvider: signer,
    });

    return(
        <div className=' flex flex-col  items-center w-[100%] h-[200px] py-10 bg-gray-100 ' >
            <p className='text-[25px] font-bold ' >Program Details</p>
        </div>
    )
}

export default CashBackDisplay