import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY = '3w4WkSQxO80wZEspStME7WNy5KIq1vJd';
function Random(){
    const [gif,setGif] = useState('');
    const [loading , setLoader] = useState(false);
    async function fetchData(){
        setLoader(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
        const {data} = await axios.get(url);
        const imagesource = data.data.images.downsized_large.url;
        setGif(imagesource);
        setLoader(false);
    }
    useEffect( () => {
        fetchData();
    },[]);
    function clickHandler(){
        fetchData();
        console.log("hello");
    }
    return(
        <div className="w-1/2 bg-green-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl mt-[15px] underline uppercase font-bold">A Random Gif</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif}/>)
            }
            
            <button onClick={clickHandler} className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>
        </div>
    )
}
export default Random;