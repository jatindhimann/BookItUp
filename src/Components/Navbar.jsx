import { NavLink } from "react-router-dom";
import Wrapper from '../assets/wrappers/Navbar'
const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-center">
        <span className="logo">BookItUp</span>
        <div className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link">
            About
          </NavLink>
          <NavLink to="/favourites" className="nav-link">
            Favourites
          </NavLink>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar