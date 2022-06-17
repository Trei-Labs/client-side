import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar =() =>{
    return(
        <div className=' flex-1 flex-row text-end w-[100vw] h-[fit-content] p-[10px]' >
            <ConnectButton  />
        </div>
    )
}

export default Navbar