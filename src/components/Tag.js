
import React, { useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hook/useGif';


const Tag= () => {
    const [tag, settag] = useState('car');
    const {gif, loader, fetchData} = useGif(tag);

   
  return (
    <div className='md:w-1/2 w-3/4 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[14px] mb-7'>
        <h1 className='text-2xl font-bold underline uppercase mt-[15px] text-center'> Random {tag} Gif</h1>
        {loader ? (<Spinner/>):(<img src= {gif} width="450" alt='gif'></img>)}
        <input className='w-10/12 text-lg py-2 rounded-lg mb-[3px] text-center'
        onChange={(event) => {settag(event.target.value)}} 
        value={tag}
        >

        </input>
        <button onClick= {()=>fetchData(tag)} className='w-10/12 bg-white rounded-md text-lg py-2 font-bold mb-[15px] '>
            Generate
        </button>
    </div>
  )
}

export default Tag;