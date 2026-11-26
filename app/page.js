"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {

  const router = useRouter();
  const [text, setText] = useState("");

 const createTree = () =>{
  router.push(`/generate?handle=${text}`);
 } 

return(
  <main>
    <section className="bg-[#c8db1d] min-h-[100vh] grid grid-cols-2 text-black">
      <div className="left flex flex-col items-center justify-center px-4 gap-6 ml-[10vw]">
        <p className='text-[#135203] text-5xl font-medium py-2 '>Create and   
            customize your Linktree
            in minutes</p>
        <p className='text-[#03380c] font-medium text-xl'>Connect all your content across social media, websites, stores and more in one link in bio. Customize every detail or let Linktree automatically enhance it to match your brand and drive more clicks.</p>
      <div className="flex gap-10">
        <input 
        value={text}
        onChange={(e)=> setText(e.target.value)}
        type="text" placeholder='Enter Your-url' className='bg-white rounded-2xl px-2 text-slate-900 font-medium hover:outline-amber-100'/>
        <button 
        onClick={()=>createTree()}
        className="px-10 py-4 bg-[#135203] text-white font-bold rounded-full cursor-pointer ">Claim Your BitTree</button>
      </div>
      </div>
      <div className="right flex flex-col items-center justify-center px-4 gap-8 mr-[10vw]">
       <img src='/home.png' alt='Home image Not found'/>

      </div>
    </section>


    <section className="bg-[#740707] min-h-[100vh] grid grid-cols-2 text-black">

      <div className="left flex flex-col justify-center items-center px-4 gap-8 ml-[10vw]">
          <h2 className="text-6xl font-serif text-[#e9c0e9]">Share your BitTree anywhere you like!</h2>
          <p className="text-xl font-bold text-white">Add your unique Linktree URL to all the platforms and places you find your audience. Then use your QR code to drive your offline traffic back to your link in bio.</p>
          <div className="btn ">
            <button
            onClick={() => window.location.href = '/generate'}
             className="bg-[#e9c0e9] px-4 cursor-pointer w-lg py-4 rounded-full font-bold text-slate-700">Get Started</button>
          </div>
      </div>

      <div className="right flex justify-center items-center ">
        <img src='/side.gif' alt='Side image Not found'/>
      </div>
      
    </section>
  </main>
);
}
