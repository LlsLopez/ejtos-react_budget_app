import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './styles.css'

const Currency = () => {

    const {dispatch} = useContext(AppContext);

    const changeCurrency = (event) => {

        let value = event.target.value;

        dispatch({
            type: 'CHG_CURRENCY',
            payload: value,
        });

        console.log(value);

    };


    return(
        <div className ='alert alert-secondary'>

            <select  
            className = "Selector"
            id = "selector"
            name = "Currency"
            onChange={(event) => {
                changeCurrency(event);
            }}
            >

            <option className = "s1" id = "s1" value = "" selected hidden> Choose Currency</option>
            <option className = "s2" id = "s2" value="$"color = "red">$ Dollar</option>
            <option id = "s2" value="£">£ Pound</option>
            <option id = "s2" value="€">€ Euro</option>
            <option id = "s2" value="₹">₹ Ruppee</option>




            </select>
        


        </div>
    );
}

export default Currency;