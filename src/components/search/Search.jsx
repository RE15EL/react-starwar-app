import './Search.css';
import { base_url } from '../../hooks/useFetch/useFetch';
import { useEffect, useState } from 'react';


export function Search() {
    // const { data, loading, error} = useFetch(`${base_url}/people/?search=${term}`);
    const [ term, setTerm] = useState('');
    const [ result, setResult] = useState(null);

    const handleOnChange = (e) => {
        setTerm(e.target.value);
        fetch(`${base_url}/people/?search=${term}`)
            .then(res => res.json())
            .then(data => setResult(data))
    }

    useEffect(()=>{
        if (term){
            fetch(`${base_url}/people/?search=${term}`)
                .then(res => res.json())
                .then(data => setResult(data))
        }else{ return}
    }, [term])

    return (
        <input onChange={handleOnChange} className="search" type="search" placeholder="Search character."/>
    )
}
