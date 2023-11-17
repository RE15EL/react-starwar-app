import './Header.css';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className='header'>
        <Link to="/" className='brand'>Star Wars Api</Link>
    </header>
  )
}
