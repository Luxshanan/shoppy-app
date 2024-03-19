import React, { Component } from 'react';
import AuthService from '../../services/AuthService';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
toast.configure()
class Login extends Component {
    state = {email:"",password:""}

    handleLoginFormSubmit=(event)=>{
        event.preventDefault();
        const loginInfo = {email:this.state.email,password:this.state.password}
        AuthService.login(this.state.email, this.state.password).then(
            res => {
           
              window.location.href="/";
            },
            error => {
                toast.error("Login Failed")
            }
        )

    }

    render() {

        return (
            <>
                <section className="vh-100">
                    <div className="container-fluid h-custom">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-md-9 col-lg-6 col-xl-5">
                                <img src="https://cdn.pixabay.com/photo/2019/04/26/07/14/store-4156934_960_720.png" className="img-fluid"
                                    alt="Sample image"/>
                            </div>
                            <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                                <form onSubmit={ this.handleLoginFormSubmit}>
                                
                                    <div><br/></div>
                              
                                    <div className="form-outline mb-4">
                                        <input type="email" id="email" className="form-control form-control-lg"
                                            placeholder="Enter email address"
                                            value={this.state.email} onChange={e => this.setState({email:e.target.value}) }  required data-testid="emailInput"  />
                                    </div>

                                    <div className="form-outline mb-3">
                                        <input type="password" id="pwd" className="form-control form-control-lg"
                                            placeholder="Enter password"
                                            value={this.state.password} onChange={e => this.setState({password:e.target.value}) } required data-testid="passwordInput"/>
                                    </div>

                                  

                                    <div className="text-center text-lg-start mt-4 pt-2">
                                        <input type="submit" value="Login" className="btn btn-primary btn-lg"
                                            style={{paddingLeft: 2.5+"rem", paddingRight: 2.5+"rem"}}
                                            data-testid="loginButton" disabled={false}/>
                                              
                                        <p className="small fw-bold mt-2 pt-1 mb-0">Don't have an account? <a href="/signup"
                                            className="link-danger">Register</a></p>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                   
                </section>
            </>);
    }
}

export default Login;