import { useState } from "react";

export const UserDetails = () => {
  const [users, setUsers] = useState([]);
  const [errors, setErrors] = useState({});
  const [editId, setEditId] = useState(null);
  const [filterUser, setFilterUser] = useState("");
  const [imgPrev, setImgPrev] = useState(null);
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    gender: "",
    location: "",
    terms: false,
    profileImg: "",
  });

  const mailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[6-9]\d{9}$/;

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "E-mail is required";
    } else if (!mailPattern.test(formData.email)) {
      newErrors.email = "Valid mail id is required";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone is required";
    } else if (!phonePattern.test(formData.phone)) {
      newErrors.phone = "Valid phone number required";
    }

    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.location) newErrors.location = "Location is required";
    if (!formData.profileImg) newErrors.profileImg = "Prolie image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  const handelInputs = (e) => {
    const { name, value, type, checked, files } = e.target;

    if (type === "file") {
      const profileImgFile = files[0];
      if (profileImgFile) {
        prevImgShow(profileImgFile);
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: profileImgFile,
        }));
      }
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      }));
    }
  };

  const prevImgShow = (img) => {
    const imageURL = URL.createObjectURL(img);
    setImgPrev(imageURL);
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(validate());

    if (!validate()) return;
    if (editId === null) {
      const userData = { ...formData, id: new Date().getTime() };
      console.log(userData);
      setUsers((prevUsers) => [...prevUsers, userData]);
    } else {
      const afterUpdateUser = users.map((user) =>
        user.id === editId ? { ...user, ...formData } : user
      );
      setUsers(afterUpdateUser);
    }
    resetForm();
  };

  const resetForm = () => {
    setFormData({
      id: "",
      name: "",
      email: "",
      phone: "",
      gender: "",
      location: "",
      terms: false,
      profileImg: "",
    });
    document.getElementById("img").value = "";
    setErrors({});
    setEditId(null);
    setImgPrev(null);
  };

  const deleteUser = (userId) => {
    const afterUserDelete = users.filter((user) => user.id !== userId);
    setUsers(afterUserDelete);
    resetForm();
  };

  const editBtn = (userId) => {
    setEditId(userId);
    const userToEdit = users.find((user) => user.id === userId);
    console.log(userToEdit);
    setFormData({ ...userToEdit });
    prevImgShow(userToEdit.profileImg);
  };

  const filterUsersList = users.filter((user) =>
    user.name.toLowerCase().includes(filterUser.toLowerCase())
  );

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
              {errors.name && <div className="errorMessage">{errors.name}</div>}
            </div>
            <div className="form-group mb-2">
              <label htmlFor="img">Profile Image : </label>
              <input
                type="file"
                id="img"
                className="form-control"
                name="profileImg"
                accept="image/*"
                onChange={handelInputs}
              />
              {imgPrev && <img src={imgPrev} width="100" alt="Profile pic" />}
              {errors.profileImg && (
                <div className="errorMessage">{errors.profileImg}</div>
              )}
            </div>
            <div className="form-group mb-2">
              <label htmlFor="mail">E-mail : </label>
              <input
                type="text"
                className="form-control"
                id="mail"
                name="email"
                value={formData.email}
                onChange={handelInputs}
              />
              {errors.email && (
                <div className="errorMessage">{errors.email}</div>
              )}
            </div>
            <div className="form-group mb-2">
              <label htmlFor="">Phone : </label>
              <input
                type="text"
                maxLength={10}
                className="form-control"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handelInputs}
              />
              {errors.phone && (
                <div className="errorMessage">{errors.phone}</div>
              )}
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
              <br />
              {errors.gender && (
                <div className="errorMessage">{errors.gender}</div>
              )}
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
                <option value="kerala">kerala</option>
              </select>
              {errors.location && (
                <div className="errorMessage">{errors.location}</div>
              )}
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
              {editId == null ? (
                <button className="btn btn-success">Add User</button>
              ) : (
                <>
                  <button className="btn btn-info">Update</button>
                  <button className="btn btn-secondary" onClick={resetForm}>
                    Cancel
                  </button>
                </>
              )}
            </div>
          </form>
        </div>
        <div className="col-lg-12 col-md-12 col-sm-12">
          {users.length > 0 ? (
            <>
              <div className="pb-2">
                <label htmlFor="">Search User : </label>
                <input
                  type="text"
                  placeholder="Search..."
                  value={filterUser}
                  onChange={(e) => {
                    setFilterUser(e.target.value);
                  }}
                />
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Profile Picture</th>
                    <th>E-mail</th>
                    <th>Phone</th>
                    <th>Gender</th>
                    <th>Location</th>
                    <th>Terms & Cond</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filterUsersList.length > 0 ? (
                    filterUsersList.map((user, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{user.name}</td>
                        <td>
                          {user.profileImg.name}{" "}
                          <img
                            src={URL.createObjectURL(user.profileImg)}
                            alt="Profile Pre"
                            width="50"
                          />
                        </td>
                        <td>{user.email}</td>
                        <td>{user.phone}</td>
                        <td>{user.gender}</td>
                        <td>{user.location}</td>
                        <td>{user.terms == true ? "Accepted" : "Rejected"}</td>
                        <td>
                          <button
                            className="btn btn-warning"
                            onClick={() => {
                              editBtn(user.id);
                            }}
                          >
                            Edit
                          </button>{" "}
                          &nbsp;
                          <button
                            className="btn btn-danger"
                            onClick={() => {
                              deleteUser(user.id);
                            }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center text-danger">
                        No User Found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </>
          ) : (
            <p>Users Not Found</p>
          )}
        </div>
      </div>
    </div>
  );
};
