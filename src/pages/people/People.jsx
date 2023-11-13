import './People.css';
import { useState } from 'react';
import { base_url, useFetch } from "../../hooks/useFetch/useFetch";
import { PeopleDetails } from '../../components/people-details/PeopleDetails';

export default function People() {
  const { data, loading, error} = useFetch(`${base_url}people`);
  const [currentPeopleId, setCurrentPeopleId] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  
  const showDetails = (people)=>{
    const {url} = people;
    const peopleId = url.split('/').slice(-2)[0];
    setCurrentPeopleId(peopleId);
    setShowDetail(true);
  }

  return (
    <main className='container'>
      <section className='peoples'>
        { error && <div style={{ padding: "1rem", border: "1px solid red" }}> Ocurrió un error al obtener los datos</div>} 
        { loading 
          ? <h3 style={{color: "#fff"}}> Loading ... </h3> 
          : <>
              <h2 className="section-title">Peoples</h2>
              <ul>        
                { data?.results?.map((people,i)=> (<li className="list-item" key={i} onClick={()=>showDetails(people)}> { people.name } </li>)) } 
              </ul> 
            </>        
        }
      </section>

      { showDetail && <PeopleDetails id={currentPeopleId}/>}
    </main>
  )
}
