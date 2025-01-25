
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Form } from "./components/form";
import { Todolistapp } from "./components/todolistapp";
import { Homepage } from "./components/home";
import { Layout } from "./components/layout";
import { NoPage } from "./components/noPage";
import { UserRegisterForm } from "./components/userRegisterForm"
import { Simplecrud } from "./components/simpleCrud";
import { Crudmanage } from "./CRUDcomponent/crudmanage"


export default function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="useForm" element={<Form />} />
          <Route path="todoList" element={<Todolistapp />} />
          <Route path="userRegisterForm" element={<UserRegisterForm />} />
          <Route path="simplecrud" element={<Simplecrud />} />
          <Route path="crudmanage" element={<Crudmanage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </>)
}
