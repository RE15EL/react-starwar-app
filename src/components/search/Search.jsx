import './Search.css';
import { base_url } from '../../hooks/useFetch/useFetch';
import { useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';


export function Search( { setData, setLoading } ) {
    const [ term, setTerm] = useState('');
    const [ debouncedSearchTerm]  = useDebounce(term, 400);

    useEffect(()=>{
        const abortController = new AbortController();
        if (term.length === 0) return;        
            
        if (debouncedSearchTerm) {
            setLoading(true);
            fetch(`${base_url}/people/?search=${debouncedSearchTerm}`, {signal: abortController.signal})
                .then(res =>res.json())
                .then(data => setData(data))
                .finally(()=> setLoading(false))
        }
        return ()=> abortController.abort();
    }, [debouncedSearchTerm])

    return (
        <input  
            type="search" 
            className="search" 
            placeholder="Search character."
            onChange={(e)=> setTerm(e.target.value)} 
        />
    )
}
