import { useState, useEffect } from 'react';

export const base_url = `https://swapi.dev/api/`;

export const useFetch = (url)=>{
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(false);

    useEffect(()=>{
        setLoading(true);    
        fetch(url)
            .then((response)=>response.json())
            .then((results)=>{
                setData(results);
                setLoading(false);
            })
        
        },[url])
    
    return {data, loading};
}
