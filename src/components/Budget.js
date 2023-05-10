import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget,expenses,currency } = useContext(AppContext);
    const {dispatch} = useContext(AppContext);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);


    const submitEvent = (event) => {

        console.log(totalExpenses);
        let value = event.target.value;
        if(value > 20000){
            dispatch({
                type: 'SET_BUDGET',
                payload: 20000,
            });
            alert("Budget Cannot exceed 20,000");
        }
        else if(budget < value){
            console.log()
            alert("You cannot reduce the budget value lower than the spending value.")
        }
        else{
            dispatch({
                type: 'SET_BUDGET',
                payload: value,
            });
        }
        

    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input
            required = 'required'
            value = {budget}
            type = 'number'
            id = 'budget'
            step = '10'
            onChange={(event) => {
                submitEvent(event);
            }
            }
            >

            </input>

        </div>
    );
};
export default Budget;