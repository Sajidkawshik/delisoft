import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Select from 'react-select';
import './ShopForm.css';


const ShopForm = (props) => {

    const [firstOption, setFirstOption] = useState([]);
    const [secondOption, setSecondOption] = useState([]);
    const [selectedSecondOption, setSelectedSecondOption] = useState();

    const zones = [

        { label: "dhanmondi", value: 1 },
        { label: "shahbag", value: 2 },
        { label: "mirpur", value: 3 },

    ];

    const routeArray = {
        one: [""],
        dhanmondi: ["1", "2", "3", "6/a", "7/a"],
        shahbag: ["ramna", "du", "poribag", "sheraton"],
        mirpur: ["1", "2", "10"]

    }

    const changeOption = (opt) => {
        //setState(opt.label);
        setSelectedSecondOption("");
        setFirstOption(opt);
        changeSecondOption(opt.label);
    }

    const selectSecondOption = (opt) => {
        setSelectedSecondOption(opt);
    }


    const changeSecondOption = (opt) => {
        let secondOption = routeArray[opt].map(opt => ({ label: opt, value: opt }));
        setSecondOption(secondOption);

    }

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">New Shop Entry</DialogTitle>
                <DialogContent className="form-dialogue">
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Shop name"
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
                            <Select id="filter1" options={zones} maxMenuHeight={150}
                                onChange={(opt) => changeOption(opt)} placeholder="Select Zone"/>
                        </div>

                        <div>
                            <Select id="filter2"
                                options={secondOption}
                                maxMenuHeight={150}
                                value={selectedSecondOption}
                                onChange={(opt) => selectSecondOption(opt)}
                                placeholder="Select Route"
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