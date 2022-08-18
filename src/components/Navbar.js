import { Link } from 'react-router-dom'
import {useTheme} from '../hooks/useTheme'

//styles
import './Navbar.css'

//components
import Searchbar from './Searchbar'

export default function Navbar() {
  const {color} = useTheme()
  
  return (
    <div className="navbar" style={{ background: color }}>
      <nav>
        <Link to="/" className="brand">
          <h1>cooking ninja</h1>
        </Link>
        <Searchbar />
        <Link to="/create">
          <p>create recipe</p>
        </Link>
      </nav>
    </div>
  )
}
