import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../../services/AuthService';
import SearchBox from '../SearchBox/SearchBox';

class NavigationBar extends Component {
    state = {}


    handleLogout = () => {
        AuthService.logout()
    }

    render() {
        const { user } = this.props 
        console.log(user)
        return (

            <nav className="navbar navbar-dark bg-info navbar-expand-lg">
                <a className="navbar-brand" href="#">SHOPPY</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>


                    </ul>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item ">
                            <Link className="nav-link" to="/Shop"> Shop</Link>
                        </li>


                    </ul>
                    <SearchBox />

                    {user ? (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <div className="navbar-text" >
                                   Hi {user.username}
                                </div>


                            </li>
                            <li className="nav-item">
                                <a href="/login" className="nav-link" onClick={this.handleLogout}>
                                    LogOut
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/carts"><i className='fa fa-shopping-cart fa-lg'></i></Link>
                            </li>
                        </div>
                    ) : (
                        <div className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to={"/login"} className="nav-link">
                                    Login
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={"/signup"} className="nav-link">
                                    Sign up
                                </Link>
                            </li>

                        </div>
                    )}



                </div>
            </nav>


        );
    }
}

export default NavigationBar;