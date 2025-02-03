import { useState } from "react";

export const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    gender: "",
    location: "",
    terms: false,
  });

  const handelInputs = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setUsers((prevUsers) => [...prevUsers, formData]);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h3>Create User Details</h3>
          <form onSubmit={handelSubmit}>
            <div className="form-group mb-2">
              <label htmlFor="uName">Name : </label>
              <input
                type="text"
                className="form-control"
                id="uName"
                name="name"
                value={formData.name}
                onChange={handelInputs}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="mail">E-mail : </label>
              <input
                type="email"
                className="form-control"
                id="mail"
                name="email"
                value={formData.email}
                onChange={handelInputs}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="">Phone : </label>
              <input
                type="number"
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handelInputs}
              />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="">Gender : </label>
              &nbsp;
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="male"
                checked={formData.gender === "male"}
                onChange={handelInputs}
              />{" "}
              Male &nbsp;
              <input
                type="radio"
                className="form-check-input"
                name="gender"
                value="female"
                checked={formData.gender === "female"}
                onChange={handelInputs}
              />{" "}
              Female
            </div>
            <div className="form-group mb-2">
              <label htmlFor="city">Location : </label>
              <select
                id="city"
                className="form-control"
                name="location"
                value={formData.location}
                onChange={handelInputs}
              >
                <option value="">Select City</option>
                <option value="Chennai">Chennai</option>
                <option value="Pondy">Pondy</option>
                <option value="Kerla">Kerla</option>
              </select>
            </div>
            <div className="form-group mb-2">
              <input
                type="checkbox"
                name="terms"
                id="terms"
                className="form-check-input"
                checked={formData.terms}
                onChange={handelInputs}
              />{" "}
              Terms and Conditions
            </div>
            <div className="form-group mb-2">
              <button className="btn btn-success">Add User</button>
            </div>
          </form>
        </div>
        <div className="col-lg-12">
          {users.length > 0 ? (
            <table className="table">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>E-mail</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Location</th>
                  <th>Terms & Cond</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.gender}</td>
                    <td>{user.location}</td>
                    <td>{user.terms == true ? "Accepted" : "Rejected"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Users Not Found</p>
          )}
        </div>
      </div>
    </div>
  );
};
