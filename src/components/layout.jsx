import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/todoList">
                  Todo List
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/useForm">
                  Use Form
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userRegisterForm">
                  User Register Form
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  CRUD Operations
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li className="nav-item">
                    <Link className="nav-link" to="/simplecrud">
                      Simple CRUD
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/crudmanage">
                      Multi-Component CRUD
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/userDetails">
                      User Details with CRUD
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Dropdown Example (Future Expansion) */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link className="dropdown-item" to="/fetchApi">
                      Service Using Fetch
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/axiosApi">
                      Service Using Axios
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/promiseApi">
                      Service Using Promise
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/jsonServerApi">
                      Service Using Json-server
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container mt-4">
        <Outlet />
      </div>
    </>
  );
};
