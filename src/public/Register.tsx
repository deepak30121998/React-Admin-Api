import React, { SyntheticEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Public.css';
import axios from 'axios';

const Register: React.FC = () => {
    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        confirm_password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.currentTarget;
        
        setState((prev) => ({
            ...prev,
            [id]: value,
        }));
    };
    

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/api/register', {
                first_name: state.first_name,
                last_name: state.last_name,
                email: state.email,
                password: state.password,
                password_confirm: state.confirm_password,
            });

            navigate('/login');
        } catch (error) {
            console.error('Registration Error:', error);
        }
    };

    return (
        <form className="form-signin" onSubmit={submit}>
            <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>

            <label htmlFor="first_name" className="sr-only">First Name</label>
            <input type="text" id="first_name" className="form-control" placeholder="First Name" required onChange={handleChange} />

            <label htmlFor="last_name" className="sr-only">Last Name</label>
            <input type="text" id="last_name" className="form-control" placeholder="Last Name" required onChange={handleChange} />

            <label htmlFor="email" className="sr-only">Email address</label>
            <input type="email" id="email" className="form-control" placeholder="Email address" required onChange={handleChange} />

            <label htmlFor="password" className="sr-only">Password</label>
            <input type="password" id="password" className="form-control" placeholder="Password" required onChange={handleChange} />

            <label htmlFor="confirm_password" className="sr-only">Confirm Password</label>
            <input type="password" id="confirm_password" className="form-control" placeholder="Confirm Password" required onChange={handleChange} />

            <button className="btn btn-lg btn-primary btn-block" type="submit">
                Register
            </button>
        </form>
    );
};

export default Register;
