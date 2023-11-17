import { useEffect, useState } from "react";
import { base_url } from "../../hooks/useFetch/useFetch";

export function Paginator({ data, setData, setLoading }) {
    const [ pageIndex, setPageIndex] = useState(1);
    const pagesTotal = data ? Math.trunc(data?.count/10): 1;

    const handlePaginator = (index)=>{
        if(index <1 || index > pagesTotal) return;
        setPageIndex(index);
    }

    useEffect(()=>{
        setLoading(true);
        fetch(`${base_url}people/?page=${pageIndex}`)
          .then(res => res.json())
          .then(result => setData(result))
          .finally(()=> setLoading(false))
      },[pageIndex])

    return (
        <div className='paginator'>
            <button className='btn-md' onClick={()=> handlePaginator(pageIndex-1)}>{"<"}</button>
            <span> page {pageIndex} of {pagesTotal} </span>
            <button className='btn-md' onClick={()=> handlePaginator(pageIndex+1)}>{">"}</button>
        </div>
    )
}
