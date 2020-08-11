import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import './Routes.css';
import { Button } from 'react-bootstrap';
const Routes = () => {

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

    const [state, setState] = useState();
    const [firstOption, setFirstOption] = useState([]);
    const [secondOption, setSecondOption] = useState([]);
    const [dropdown, setDrop] = useState();


    const changeOption = (opt) => {
        setState(opt.label);
        setDrop("");
        setFirstOption(opt);
        changeSecondOption(opt.label);
    }

    const selectSecondOption = (opt) => {
        setDrop(opt);
    }


    const changeSecondOption = (opt) => {
        let secondOption = routeArray[opt].map(opt => ({ label: opt, value: opt }));
        console.log(secondOption);
        setSecondOption(secondOption);

    }




    return (
        <div className="container" >
            <div className="filter-section">
                <div>
                    <Select id="filter1" options={zones}
                        onChange={(opt) => changeOption(opt)} />
                </div>

                <div>
                    <Select id="filter2"
                        options={secondOption}
                        value={dropdown}
                        onChange={(opt) => selectSecondOption(opt)}
                    />
                </div>

                <Button id="button" variant="success" onClick={() => console.log(firstOption.label, dropdown.label)}>Filter</Button>
            </div>
        </div>
    );

};


export default Routes;
