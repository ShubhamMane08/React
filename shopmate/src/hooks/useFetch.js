import { useEffect, useState } from "react"

export const useFetch = (url) => {

    const [data,setData]=useState(null);
    const [loading, setLoading]=useState(false);
    const [error,setError]=useState("");
    useEffect(()=>{
        const fetchData=async ()=>{
            setLoading(true);
            try
            {
                
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
    },[url])

    
  return {data, loading,error}
}
