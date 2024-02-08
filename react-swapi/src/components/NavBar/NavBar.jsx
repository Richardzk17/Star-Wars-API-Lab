// npm module
import { Link } from "react-router-dom"

// assets

const NavBar = () => {
  return (
    <header>
      <nav>
        <Link to='/Starship'>STAR WARS STARSHIP</Link>
      </nav>
    </header>
  )
}

export default NavBar