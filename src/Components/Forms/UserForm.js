import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from 'react-select';
import './ShopForm.css';


const ShopForm = (props) => {

    const [firstOption, setFirstOption] = useState([]);
    const [secondOption, setSecondOption] = useState([]);
    const [selectedSecondOption, setSelectedSecondOption] = useState();

    const roles = [

        { label: "Admin", value: 1 },
        { label: "SR", value: 2 },
        { label: "DSR", value: 3 },

    ];

    const zones = [

        { label: "Dhanmondi", value: 1 },
        { label: "Shahbag", value: 2 },
        { label: "Mirpur", value: 3 },

    ];


    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New User Entry</DialogTitle>
                <DialogContent className="form-dialogue">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Username"
                        type="email"
                        fullWidth
                    />
                    <TextField

                        margin="dense"
                        id=""
                        label="Email Address"
                        type="email"
                        fullWidth
                    />

                    <TextField

                        margin="dense"
                        id="contact no"
                        label="Contact number"
                        type="string"
                        fullWidth
                    />

                    <div className="formDropDown">
                        <div>
                            <Select id="filter1"
                                options={roles}
                                placeholder="Select Role"
                            />
                        </div>

                        <div>
                            <Select id="filter2"
                                options={zones}
                                placeholder="Select Zone"
                            />
                        </div>
                    </div>


                </DialogContent>
                <DialogActions id="dlgAction" >
                    <Button variant="primary" onClick={props.handleClose} color="primary">
                        Done
                    </Button>
                    <Button variant="primary" onClick={props.handleClose} color="primary" id="buttonCancel">
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default ShopForm; 