import { base_url, useFetch } from "../../hooks/useFetch/useFetch";

export default function People() {
  const { data, loading, error} = useFetch(`${base_url}people`);
  
  return (
    <div>
      { error && <div style={{ padding: "1rem", border: "1px solid red" }}> Ocurrió un error al obtener los datos</div>} 
      { loading 
        ? <h3 style={{color: "#fff"}}> Loading ... </h3> 
        : <>
            <h2 className="section-title">Peoples</h2>
            <ul>        
              { data?.results?.map((people,i)=> (<li key={i}> { people.name } </li>)) } 
            </ul> 
          </>        
      }
    </div>
  )
}
