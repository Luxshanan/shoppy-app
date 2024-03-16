import React, { Component } from 'react';
import { createUser } from '../../services/UserService';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
  
toast.configure()

class UserRegistration extends Component {
    state = {email:"",username:"",password:"",confirmPassword:""}

    handleSignupFormSubmit = (event) => {
       event.preventDefault();
       if(this.state.password!==this.state.confirmPassword){
            toast.error("Passwords does not match")
          
       }else{
           const user={email:this.state.email,username:this.state.username,password:this.state.password}
           createUser(user).then(
               res =>{
                toast.success("Successfully Signed up")
                   window.location.href="/login";
            },
            err=>{
                if(err.response.data.message && err.response.data.message=="User already exists under given mail"){
                    toast.error("User with the given email already exists!")
                }
            }
           ) 
       }
       
    }

    render() {
        return (
            <>
                <section className="vh-100" style={{backgroundColor: "#eee"}}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{borderRadius: 25+"px"}}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign Up</p>

                                                <form className="mx-1 mx-md-4" onSubmit={this.handleSignupFormSubmit}>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="form3Example1c" className="form-control" 
                                                            value={this.state.username} onChange={e => this.setState({username:e.target.value})} placeholder="Username" required/>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="email" id="form3Example3c" className="form-control" 
                                                            value={this.state.email} onChange={e => this.setState({email:e.target.value})}  placeholder="Email Address"  required/>
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="password" id="form3Example4c" className="form-control" 
                                                            value={this.state.password} onChange={e => this.setState({password:e.target.value})}placeholder="Password" required />
                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fa fa-lock fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="password" id="form3Example4cd" className="form-control"
                                                             value={this.state.confirmPassword} onChange={e => this.setState({confirmPassword:e.target.value})} placeholder="Repeat Your Password"  required/>
                                                        </div>
                                                    </div>

                                                    
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <input  type="submit" className="btn btn-primary btn-lg" value="Register"/>
                                                    </div>

                                                </form>

                                            </div>
                                            <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                                <img src="https://cdn.pixabay.com/photo/2016/05/18/16/25/shopping-1400845_960_720.png" className="img-fluid" alt="Sample image"/>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        );
    }
}

export default UserRegistration;