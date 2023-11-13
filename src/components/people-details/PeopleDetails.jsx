import './PeopleDetails.css';
import { base_url, useFetch } from '../../hooks/useFetch/useFetch';

export function PeopleDetails({id}) {
  const { data, loading, error} = useFetch(`${base_url}people/${id}`);

  return (
     
    <>
      { loading 
        ? <h3 style={{color: "#fff"}}> Loading ... </h3> 
        : <div className='details'>
            <h4 className="section-title"> { data?.name } </h4>
            <p> Gender: { data?.gender } </p>
            <p> Birthyear: { data?.birth_year } </p>
            <p> Gender: { data?.birth_year } </p>
            <p> Created: { data?.created } </p>
          </div>  
      } 
    </>     
  )
}
