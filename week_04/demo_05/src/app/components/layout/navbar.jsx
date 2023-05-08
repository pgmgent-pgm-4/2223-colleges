// Import external modules
import { Link } from 'react-router-dom';

// Import internal modules
import { ROUTES } from '../../routes';

const NavBar = () => {
  return (
    <>
    <nav className={``}>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to={ROUTES.Home}>Home<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item active">
          <Link className="nav-link" to={ROUTES.Posts}>Blog</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.About}>About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={ROUTES.Contact}>Contact</Link>
        </li>
      </ul>
    </nav>
    </>
  )
};

export default NavBar;