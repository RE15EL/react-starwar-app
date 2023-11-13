import { base_url, useFetch } from "../../hooks/useFetch/useFetch";

export default function People() {
    const { data, loading} = useFetch(`${base_url}people`);

    return (
      <div>
        {
          loading ? <h3 style={{color: "#fff"}}> Loading ... </h3>
                  : data && <ul>
                    {
                      data.results.map((people,i)=>{
                        <li key={i} style={{ color: "#fff"}}> { people.name } </li>
                      })
                    }
                  </ul>
        }        
      </div>
    )
}
