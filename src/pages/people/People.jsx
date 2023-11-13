import { base_url, useFetch } from "../../hooks/useFetch/useFetch";

export default function People() {
  const { data, loading} = useFetch(`${base_url}people`);
  console.log('data >> ', data);
  return (
    <div>
      { loading 
        ? <h3 style={{color: "#fff"}}> Loading ... </h3> 
        : <ul>        
            { data?.results?.map((people,i)=> (<li key={i}> { people.name } </li>)) } 
          </ul>         
      }
    </div>
  )
}
