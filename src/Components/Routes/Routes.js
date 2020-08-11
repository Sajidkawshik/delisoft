import React from 'react';
import { useState } from 'react';
import Select from 'react-select';
import './Routes.css';
import { Button } from 'react-bootstrap';
import shopList from "../../fakeData/shops";
import { useEffect } from 'react';
import ShopView from './ShopView';
import ShopForm from '../Forms/ShopForm';
const Routes = () => {

    /*---sample data---*/
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
    /*---sample data---*/

    const [shops, setShops] = useState();
    const [firstOption, setFirstOption] = useState([]);
    const [secondOption, setSecondOption] = useState([]);
    const [selectedSecondOption, setSelectedSecondOption] = useState();
    const [zone, setZone] = useState();
    const [route, setRoute] = useState();
    const [shownShops, setShownShops] = useState([]);



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

    useEffect(() => {
        setShops(shopList);
        //setShownShops();
    }, [])


    const filterShop = (zone, route) => {


        if (zone != null && route == null) {
            let shownListZone = shops.filter(shop => shop.zone.toUpperCase() === zone.toUpperCase());
            setShownShops(shownListZone);

        }
        else if (route != null && zone != null) {
            let shownListZone = shops.filter(shop => shop.zone.toUpperCase() === zone.toUpperCase());
            let shownList = shownListZone.filter(user => user.route.toUpperCase() === route.toUpperCase());
            setShownShops(shownList);

        }

    }

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className="container" >

            <ShopForm open={open}
                      handleClickOpen={handleClickOpen}
                      handleClose={handleClose}
            ></ShopForm>

            <div className="filter-section">
                <div>
                    <Select id="filter1" options={zones}
                        onChange={(opt) => changeOption(opt)} />
                </div>

                <div>
                    <Select id="filter2"
                        options={secondOption}
                        value={selectedSecondOption}
                        onChange={(opt) => selectSecondOption(opt)}
                    />
                </div>

                {
                    (firstOption.label != null) ?
                        <Button id="button-route-filter" variant="success" onClick={() => filterShop(firstOption.label, selectedSecondOption.label)}>Filter</Button>
                        :
                        <Button id="button-route-filter" variant="success" disabled="true">Filter</Button>

                }

                <div id="addShop">
                    <Button variant="success" color="primary" onClick={()=>setOpen(true)}>Add new shop</Button>
                </div>

            </div>

           
            
            
            <div className="row shopPanel">

                {
                    shownShops.map(shops => <ShopView
                        shops={shops}
                    ></ShopView>)
                }



            </div>


        </div>
    );

};


export default Routes;
