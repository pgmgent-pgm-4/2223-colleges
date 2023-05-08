// Import external modules
import { Link } from 'react-router-dom';

// Import internal modules
import { ROUTES } from '../../routes';

const NavUser = ({ className }) => {
  return (
    <div className={`${className}`}>
      <ul className="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            drdynscript
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Profiel</a></li>
            <li><a class="dropdown-item" href="#">Settings</a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a class="dropdown-item" href="#">Uitloggen</a></li>
          </ul>
        </li>
      </ul>
    </div>
  )
};

export default NavUser;