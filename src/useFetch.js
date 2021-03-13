import { useEffect, useState } from "react";

//const SEARCHAPI = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";

function useFetch(url , result){
    const [data , setData] =useState(null);
    const [error , setError] =useState(null);

    useEffect(()=>{
        fetch(`${url}`)
        .then((res)=>{
            return res.json()
        })
        .then((data)=>{
            if(result){
            setData(data.results)
            console.log(data.results)
            }else{
                setData(data)
                console.log(data)
            }
        })
        .catch((err)=>{
            setError(err);
            console.error(err)
        })
    }, [])

    return {data , error}
}

export default useFetch;