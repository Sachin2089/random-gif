
import Spinner from './Spinner';
import useGif from '../hook/useGif';



const Random = () => {
   
    const {gif, loader, fetchData} = useGif();
   
  return (
    <div className='md:w-1/2 w-3/4  bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[14px]'>
        <h1 className='text-2xl font-bold underline uppercase mt-[15px]'> a Random Gif</h1>
        {loader ? (<Spinner/>):(<img src= {gif} width="450" alt='gifimage'></img>)}
        <button onClick = { ()=> fetchData()} className='w-10/12 bg-white rounded-md text-lg py-2 font-bold mb-[15px] '>
            Generate
        </button>
    </div>
  )
}

export default Random