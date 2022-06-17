import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { VscArrowRight } from "react-icons/vsc";

export default function Home() {
  return (
    <div className='flex flex-wrap ' >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Jura:wght@500&display=swap" rel="stylesheet"/>
      </Head>
      
      
        <div className='pt-[200px] w-[50%]  bg-[#021229] h-[100vh] p-[50px]' >
          <label className='heading text-white ' >Welcome to Admin Portal</label>
          <p className=' text-[30px] text-white mt-[50px]' >Choose the Loyalty Program <br/> You want to set-up</p>
        </div>
        <div className=' flex-col w-[50%] bg-white h-[100vh] p-[50px]' >
          <a href='./Cashback' >
            <div className='card' >
              <VscArrowRight/>
              <label>Set up CashBack Rewards </label>
              <p className='text-[18px]' >Give your customers rewards in form of crypto as cashback based on their loyalty and purchases</p>
            </div>
          </a>

          <a href='./BuyGet' >
            <div className='card' >
              <VscArrowRight/>
              <label>Set up Buy X Get 1 Free Programme </label>
              <p className='text-[18px]'>Increase your purchases by rewarding your customer with freebies the more they buy.</p>
            </div>
          </a>
          
          <div className='card' >

          </div>
        </div>
    </div>
        
  )
}
