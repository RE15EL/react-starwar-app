import { useState, useEffect } from 'react';

export const base_url = `https://swapi.dev/api/`;

export const useFetch = (url)=>{
    const [ data, setData ] = useState(null);
    const [ error, setError ] = useState(null);
    const [ loading, setLoading ] = useState(false);
    const [ controller, setController ] = useState(null);
    
    useEffect(()=>{
        const abortController = new AbortController(); 
        setController(abortController);
        setLoading(true);
        fetch(url, {signal: abortController.signal})
            .then(res => res.json())
            .then(result => setData(result))
            .catch(error => {
                if (error.name === 'AbortError') {
                    console.error('Request cancelled');
                }else{
                    setError(error)
                }
            })
            .finally(()=> setLoading(false))

        return () => abortController.abort();
    },[url]);

    const handleCancelRequest = () => {
        if(controller){
            controller.abort();
            setError('Request cancelled');
        }
    }
    
    return {data, setData, loading, setLoading, error, handleCancelRequest};
}

