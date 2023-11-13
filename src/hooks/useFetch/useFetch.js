import { useState, useEffect } from 'react';

export const base_url = `https://swapi.dev/api/`;

export const useFetch = (url)=>{
    const [ data, setData ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    
    useEffect(()=>{
        setLoading(true);
        fetch(url)
            .then(res => res.json())
            .then(result => setData(result))
            .finally(()=>setLoading(false))
    },[url]);
    
    return {data, loading};
}
