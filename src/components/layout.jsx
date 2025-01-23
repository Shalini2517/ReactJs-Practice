
import { Outlet, Link } from "react-router-dom"
export const Layout = () => {
    return (<>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/todoList">Todo List</Link>
                </li>
                <li>
                    <Link to="/useForm">Use Form</Link>
                </li>
                <li>
                    <Link to="/userRegisterForm">User Regiser Form</Link>
                </li>
                <li>
                    <Link to="/simplecrud">Simple Crud</Link>
                </li>
            </ul>
        </nav>
        <Outlet />
    </>)
}