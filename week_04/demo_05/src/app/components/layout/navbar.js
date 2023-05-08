// Import external modules
import { Link } from 'react-router-dom';

// Import internal modules
import { ROUTES } from '../../routes';

const NavBar = () => {
  return (
    <nav className={``}>
      <ul>
        <li>
          <Link to={ROUTES.Home}>Home</Link>
        </li>
        <li>
          <Link to={ROUTES.Posts}>Blog</Link>
        </li>
        <li>
          <Link to={ROUTES.About}>About</Link>
        </li>
        <li>
          <Link to={ROUTES.Contact}>Contact</Link>
        </li>
      </ul>
    </nav>
  )
};

export default NavBar;