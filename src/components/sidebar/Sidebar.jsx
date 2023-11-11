import './Sidebar.css';
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
        <h2 className='section-title'> Resources</h2>          
                    
        <nav className='resources'>
            <NavLink to="films" className="nav-link"> Films </NavLink>
            <NavLink to="people" className="nav-link"> People </NavLink>
            <NavLink to="species" className="nav-link"> Species </NavLink>
            <NavLink to="planets" className="nav-link"> Planets </NavLink>
            <NavLink to="vehicles" className="nav-link"> Vehicles </NavLink>
            <NavLink to="starships" className="nav-link"> Starships </NavLink>
        </nav> 
    </>
  )
}
