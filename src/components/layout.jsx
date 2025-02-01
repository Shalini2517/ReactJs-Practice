
import { Outlet, Link } from "react-router-dom"
export const Layout = () => {
    return (<>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/todoList">Todo List</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/useForm">Use Form</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/userRegisterForm">User Regiser Form</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/simplecrud">Simple Crud</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/crudmanage">Multy Component Crud</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/userDetails">User Details with CRUD</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>)
}