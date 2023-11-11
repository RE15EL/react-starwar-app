import './Sidebar.css';
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  const applyClass = ({isActive})=>{
    return [
      "nav-link",
      isActive ? "active-link" : ""
    ].join(" ")
  }
  return (
    <>
        <h2 className='section-title'> Resources</h2>          
                    
        <nav className='resources'>
            <NavLink to="films" className={applyClass}> Films </NavLink>
            <NavLink to="people" className={applyClass}> People </NavLink>
            <NavLink to="species" className={applyClass}> Species </NavLink>
            <NavLink to="planets" className={applyClass}> Planets </NavLink>
            <NavLink to="vehicles" className={applyClass}> Vehicles </NavLink>
            <NavLink to="starships" className={applyClass}> Starships </NavLink>
        </nav> 
    </>
  )
}
