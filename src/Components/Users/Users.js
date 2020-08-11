import React, { useState, useEffect } from 'react';
import './Users.css';
import UserView from '../UserView/UserView';
import usersList from "../../fakeData/users";
import { Dropdown, ButtonGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
const User = () => {

    const [users, setUsers] = useState([]);
    const [shownUsers, setShownUsers] = useState([]);
    const [zone, setZone] = useState();
    const [role, setRole] = useState();


    useEffect(() => {
        setUsers(usersList);
        setShownUsers(usersList);
    }, [])

    const settingrole = (selectedRole) => {
        setRole(selectedRole);
        //console.log(role);
    }
    const settingzone = (selectedZone) => {
        setZone(selectedZone);
        //console.log(zone);
    }
    const filter = (role, zone) => {
        //console.log(shownUsers);
        
        if(zone==null && role!=null){
             let shownListrole = users.filter(user => user.role.toUpperCase() === role.toUpperCase());
             //let shownList = shownListrole.filter(user =>user.zone.toUpperCase()===zone.toUpperCase());
             setShownUsers(shownListrole);
        }

        else if(role==null && zone!=null){
            let shownListzone = users.filter(user =>user.zone.toUpperCase()===zone.toUpperCase());
            setShownUsers(shownListzone);
        }

        else if(role!= null && zone!=null){
            let shownListrole = users.filter(user => user.role.toUpperCase() === role.toUpperCase());
            let shownList = shownListrole.filter(user =>user.zone.toUpperCase()===zone.toUpperCase());
            setShownUsers(shownList);
        }

        else{
            setShownUsers(usersList);
        }

        
    }




return (
    <div className="container">

        <div className="">
            <div className="filter-section">
                <div className="filter">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {role}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => settingrole("admin")}>Admin</Dropdown.Item>
                            <Dropdown.Item onClick={() => settingrole("sr")}>SR</Dropdown.Item>
                            <Dropdown.Item onClick={() => settingrole("dsr")}>DSR</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div className="filter">
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            {zone}
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item onClick={() => settingzone("dhanmondi")}>Dhanmondi</Dropdown.Item>
                            <Dropdown.Item onClick={() => settingzone("shahbag")}>Shahbag</Dropdown.Item>
                            <Dropdown.Item onClick={() => settingzone("mirpur")}>Mirpur</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>

                <div>
                    <Button variant="success" onClick={() => filter(role, zone)}>Filter</Button>
                </div>

            </div>



            <div className="row userPanel">

                {
                    shownUsers.map(users => <UserView
                        users={users}
                    ></UserView>)
                }



            </div>

        </div>

    </div>
);
};

export default User;