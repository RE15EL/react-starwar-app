import './App.css'
import { useEffect, useState } from 'react';
import { getResources } from './services/characters'
import { NavLink, Outlet } from 'react-router-dom';

function App() {
  const [resources, setResources] = useState(null)

  useEffect(()=>{
    getResources().then(data => {   
      const results = Object.entries(data);
      setResources(results);
      console.log(results)
    });
  },[]);

  return (
    <>
      <header className='header'>
        <h1 className='brand'>Star Wars Api</h1>
      </header>
      
      <main className='content'>
        
        <section className='sidebar'>
          <h2 className='section-title'> Resources</h2>          
          {
            resources &&
              <nav className='resources'>
                <NavLink to={resources[0][1]} className="nav-link"> {resources[0][0]} </NavLink>
                <NavLink to={resources[1][1]} className="nav-link"> {resources[1][0]} </NavLink>
                <NavLink to={resources[2][1]} className="nav-link"> {resources[2][0]} </NavLink>
                <NavLink to={resources[3][1]} className="nav-link"> {resources[3][0]} </NavLink>
                <NavLink to={resources[4][1]} className="nav-link"> {resources[4][0]} </NavLink>
                <NavLink to={resources[5][1]} className="nav-link"> {resources[5][0]} </NavLink>
              </nav>
          }   
         
        </section>

        <aside className='data'>
          <Outlet/>
        </aside>
      </main>
    </>
  )
}

export default App
