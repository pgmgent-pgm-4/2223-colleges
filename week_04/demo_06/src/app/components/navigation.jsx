import { useUserContext } from "../contexts/user.context";

// Styling
import './navigation.scss';

const Navigation = () => {
  const { user, logIn, logOut } = useUserContext();

  return (
    <div className="">
      {user && 
        <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={user.avatarUrl} className={`avatar`} />
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#" onClick={() => logOut()}>Logoff</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      }
      {!user && 
        <>
          <button onClick={() => logIn()}>Login</button>
        </>
      }
    </div>
  )
};

/*
<div className="dropdown">
  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>
*/

export default Navigation;