import React, { Component } from 'react';
import "./css/business-home.component.css";
import BusinessLogin from "./business-login.component";
import {Link} from 'react-router-dom';

export default class Home extends Component {
    render(){
        return(
            <div className = "container-fluid">
                <div className = 'login-reg-panel col-sm-12 col-md-12'>
                    <h2 className = 'heading-MS'>
                    Appleseed Initiative Site Assistant
                    </h2>
                    <p className = 'businessDetail'>
                    "Create and maintain a simple website for your business. This is a free service that allows you to share the critical information about how you are doing business today. Add changes and updates easily. Your Site Assistant is here to make it easy for you keep your customers up-to-date with the latest information about your business and how they can shop with you now.
                    </p>

                    <h3>"It's free. It's easy. Create a site for your business today."</h3>
                    <Link to="/add">
                         <button className= "btn btn-outline-secondary" style={{padding:"5px 20px"}}>Register </button>
                    </Link>

                    <BusinessLogin/>
                </div>

                <div className = 'clientsPanel'>
                    <h3>
                        Our Clients
                    </h3>
                </div>

            </div>
        );

    }
}