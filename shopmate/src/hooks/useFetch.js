import { useEffect, useRef, useState } from "react"

export const useFetch = (url,_body) => {

    const [data,setData]=useState(null);
    const [loading, setLoading]=useState(false);
    const [error,setError]=useState("");
    const body = useRef(_body);

    useEffect(()=>{
        const fetchData=async ()=>{
            setLoading(true);
            try
            {
                const controller = new AbortController();
                const response = await fetch(url,{signal:controller.signal});
                if(!response.ok)
                {
                    throw new Error(response.statusText)
                }
                const result = await response.json();
                console.log(response);
                setLoading(false);
                setData(result);
            }
            catch(error)
            {
        
                setError(error.message);
                setLoading(false);
                setError("");
            }
        }
        fetchData();
        return ()=>controller.abort();
    },[url,body]);

    
  return {data, loading,error}
}
