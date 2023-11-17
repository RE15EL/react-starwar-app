import './Paginator.css';
import { useEffect, useState } from "react";
import { base_url } from "../../hooks/useFetch/useFetch";
import { useDebounce } from 'use-debounce';

export function Paginator({ data, setData, setLoading }) {
    const [ pageIndex, setPageIndex] = useState(1);
    const [ debouncedPageIndex ]  = useDebounce(pageIndex, 400);
    const pagesTotal = data ? Math.trunc( (data?.count/10) +1 ): 1;

    const handlePaginator = (index)=>{
        if(index <1 || index > pagesTotal) return;
        setPageIndex(index);
    }

    useEffect(()=>{
        const abortController = new AbortController();
        setLoading(true);
        fetch(`${base_url}people/?page=${debouncedPageIndex}`, {signal: abortController.signal})
          .then(res => res.json())
          .then(result => setData(result))
          .finally(()=> setLoading(false))

          return () => abortController.abort();
      },[debouncedPageIndex])

    return (
        <div className='paginator'>
            <button disabled={pageIndex < 2} className='btn-md' onClick={()=> handlePaginator(pageIndex-1)}>{"<"}</button>
            <span> page {pageIndex} of {pagesTotal} </span>
            <button disabled={pageIndex === pagesTotal} className='btn-md' onClick={()=> handlePaginator(pageIndex+1)}>{">"}</button>
        </div>
    )
}
