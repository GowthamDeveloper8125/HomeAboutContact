// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <div className="NavBarContainer">
    <div className="LogoContainer">
      <img
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
        alt="wave"
        className="logoImage"
      />
      <h1>Wave</h1>
    </div>
    <ul className="HomeContainer">
      <li>
        <Link to="/" className="NavBar-Headings">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="NavBar-Headings">
          About
        </Link>
      </li>

      <li>
        <Link to="/contact" className="NavBar-Headings">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

export default Header
