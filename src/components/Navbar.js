import { Link } from 'react-router-dom'
import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <div className='navbar'>
    <nav>
        <Link to='/' className='brand'>
     <h1>cooking ninja</h1>
    </Link>
    <Searchbar/>
    <Link to='/create'>
    <p>create recipe</p>
    </Link>
    </nav>
 
    </div>
  )
}
