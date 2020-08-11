import React from 'react';
import "./UserView.css";
import img from "./../../user.jpg";
import { useState } from 'react';
import { useEffect } from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
const UserView = (props) => {


    const { id, name, role, zone, contact, image } = props.users;


    return (

        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
            <div className="user-view">
                <div>
                    <img src={img} alt=""></img>
                </div>

                <div className="info">
                    <h5 className="user-name">{name}</h5>
                    <p>Role: {role}</p>
                    <p>Contact No: {contact}</p>
                    <p>Zone: {zone}</p>

                    <div className="buttons">
                        <Button variant="primary" size="sm">
                            Report
                        </Button>

                        <Button variant="primary" size="sm">
                            Route
                        </Button>

                        <Button variant="danger" size="sm">
                            Delete 
                        </Button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default UserView;