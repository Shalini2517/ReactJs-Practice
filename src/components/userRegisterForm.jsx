import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
export const UserRegisterForm = () => {
    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        address: '',
        gender: '',
        terms: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setUsers([...users, formData]);
        setFormData({ name: '', email: '', phone: '', address: '', gender: '', terms: false });
    };

    const deleteUser = (index) => {
        setUsers(users.filter((_, i) => i !== index));
    };

    return (
        <div className="container mt-4">
            <h2 className="mb-4">Registration Form</h2>
            <form onSubmit={handleSubmit} className="mb-4">
                <div className="mb-3">
                    <input type="text" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="email" name="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="tel" name="phone" className="form-control" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <input type="text" name="address" className="form-control" placeholder="Address" value={formData.address} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label className="form-check-label me-3">
                        <input type="radio" name="gender" value="Male" className="form-check-input" checked={formData.gender === 'Male'} onChange={handleChange} /> Male
                    </label>
                    <label className="form-check-label">
                        <input type="radio" name="gender" value="Female" className="form-check-input" checked={formData.gender === 'Female'} onChange={handleChange} /> Female
                    </label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" name="terms" className="form-check-input" checked={formData.terms} onChange={handleChange} />
                    <label className="form-check-label">Accept Terms & Conditions</label>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>

            <h2>Registered Users</h2>
            <table className="table table-bordered mt-3">
                <thead className="table-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Gender</th>
                        <th>Terms</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.length > 0 ? (
                        <>{
                            users.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.address}</td>
                                    <td>{user.gender}</td>
                                    <td>{user.terms ? 'Accepted' : 'Declined'}</td>
                                    <td><button className="btn btn-danger" onClick={() => deleteUser(index)}>Delete</button></td>
                                </tr>
                            ))
                        }</>
                    ) : (<tr><td colSpan="7" className='text-center'><p>Useres Not Found</p></td></tr>)}
                </tbody>
            </table>
        </div>
    );
}



