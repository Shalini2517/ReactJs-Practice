export const UserDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h3>Create User Details</h3>
          <form>
            <div className="form-group mb-2">
              <label htmlFor="uName">Name : </label>
              <input type="text" className="form-control" id="uName" />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="mail">E-mail : </label>
              <input type="email" className="form-control" id="mail" />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="">Phone : </label>
              <input type="number" className="form-control" id="phone" />
            </div>
            <div className="form-group mb-2">
              <label htmlFor="">Gender : </label>
              &nbsp;
              <input
                type="radio"
                className="form-check-input"
                name="gender"
              />{" "}
              Male &nbsp;
              <input
                type="radio"
                className="form-check-input"
                name="gender"
              />{" "}
              Female
            </div>
            <div className="form-group mb-2">
              <label htmlFor="city">Location : </label>
              <select name="city" id="city" className="form-control">
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
              />{" "}
              Terms and Conditions
            </div>
            <div className="form-group mb-2">
              <button className="btn btn-success">Add User</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
