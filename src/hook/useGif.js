import axios from 'axios';
import { useEffect, useState } from 'react'


const url = `https://api.giphy.com/v1/gifs/random?api_key=tYFAIB6Ezk6uo4T7CUdZlsM5Dl0pCWyL`;

const useGif = (tag) => {
  

    const [gif, setgif] = useState('');
    const [loader, setloader] = useState(false);
    
    async function fetchData(tag){
    
            setloader(true);
            const {data} =  await axios.get(tag ? `${url}&tag=${tag}` : url);
            const imageSource = data.data.images.downsized_large.url;
            setgif(imageSource);
            setloader(false);
       
    }

    useEffect( ()=>{
        fetchData();
    }, [])
    
    return{
        gif, loader, fetchData
    };
}

export default useGif