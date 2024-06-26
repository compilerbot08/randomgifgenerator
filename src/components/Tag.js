import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";

const API_KEY = '3w4WkSQxO80wZEspStME7WNy5KIq1vJd';
function Tag(){
    const [gif,setGif] = useState('');
    const [loading , setLoader] = useState(false);
    const [tag,setTag] = useState('car');
    async function fetchData(){
        setLoader(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
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
    function changeHandler(event){
        setTag(event.target.value);
    }
    return(
        <div className="w-1/2 bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-y-5 mt-[15px]">
            <h1 className="text-2xl mt-[15px] underline uppercase font-bold">Random {tag} Gif</h1>
            {
                loading ? (<Spinner/>) : (<img src={gif}/>)
            }
            
            <input
                className="w-10/12 bg-white text-center text-lg py-2 rounded-lg mb-[10px]"
                onChange={changeHandler}
                value={tag}
            />
            <button onClick={clickHandler} className="w-10/12 bg-white text-lg py-2 rounded-lg mb-[20px]">
                Generate
            </button>
        </div>
    )
}
export default Tag;