import React, { Component, SyntheticEvent } from 'react';
import './Public.css';

class Register extends Component {
    
    first_name = '';
    last_name = '';
    email = '';
    password = '';
    confirm_password = '';

    submit = (e: SyntheticEvent) => {
        e.preventDefault();
        
        console.log({
            first_name: this.first_name,
            last_name: this.last_name,
            email :this.email,
            password: this.password,
            confirm_password: this.confirm_password
        });
    }
    
    render() {
        return (
            <form className="form-signin" onSubmit={this.submit}>
            <h1 className="h3 mb-3 font-weight-normal">Please Register</h1>
            
            <label htmlFor="firstname" className="sr-only">First Name</label>
            <input type="text" id="firstname" className="form-control" placeholder="First Name" required onChange={ e => this.first_name = e.target.value } />
            
            <label htmlFor="lastname" className="sr-only">Last Name</label>
            <input type="text" id="lastname" className="form-control" placeholder="Last Name" required onChange={ e => this.last_name = e.target.value } />
            
            <label htmlFor="inputEmail" className="sr-only">Email address</label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required onChange={ e => this.email = e.target.value } />

            <label htmlFor="inputPassword" className="sr-only">Password</label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required onChange={ e => this.password = e.target.value } />
            
            <label htmlFor="passwordconfirm" className="sr-only">Confirm Password</label>
            <input type="password" id="passwordconfirm" className="form-control" placeholder="Confirm Password" required onChange={ e => this.confirm_password = e.target.value } />
            
            <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
            </form>
        );
    }
}

export default Register;