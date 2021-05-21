import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';


const initialFormValues = {
    name: '',
    size: '',
    topping1: '',
    topping2: '',
    special: ''
}

function PizzaForm() {
    const [formValues, setFormValues] = useState(initialFormValues);
    const [postState, setPostState] = useState([]);
    const { push } = useHistory()

    const change = (ev) => {
        const {name, value } = ev.target
        setFormValues({...formValues, [name]: value})
    }

    // const submit = (ev) => {
    //     ev.preventDefault()
    //     submit()
    // }

    const routeToHome = () => {
        push('/')
    }

    useEffect(() => {
        axios
        .post(`https://reqres.in/api/orders`)
        .then(res => {
            setPostState(res.data)
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return(
        <form id='pizza-form' /*onSubmit={submit}*/> 
           <div className='form-group-inputs'>
            <label>Name
                <input
                id='name-input'
                type='text'
                onChange={change}
                value={formValues.name}
                name='name'
                />
            </label>
            <label>Size
                <select value={formValues.size} name='size' onChange={change} id='size-dropdown'>
                    <option value=''>-- Select a Size --</option>
                    <option value='Small'>Small</option>
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                </select>
            </label>
            <label>First Topping
                <select value={formValues.toppings1} name='toppings1' onChange={change}>
                    <option value=''>-- First Topping --</option>
                    <option value='Pepperoni'>Pepperoni</option>
                    <option value='Sausage'>Sausage</option>
                    <option value='Peppers'>Peppers</option>
                    <option value='Onions'>Onions</option>
                </select>
            </label>
            <label>Second Topping
                <select value={formValues.toppings2} name='toppings2' onChange={change}>
                    <option value=''>-- Second Topping --</option>
                    <option value='Pepperoni'>Pepperoni</option>
                    <option value='Sausage'>Sausage</option>
                    <option value='Peppers'>Peppers</option>
                    <option value='Onions'>Onions</option>
                </select>
            </label>
            <label>Special Request
                <input 
                id='special-text'
                type='text'
                onChange={change}
                value={formValues.special}
                name='special'
                />
            </label>

            <div>
            <button id='order-button' disabled={!formValues.name || !formValues.size || !formValues.toppings1 || !formValues.toppings2 || !formValues.special}>Place Order</button>
            <button onClick={routeToHome} >Back to Home</button>
            </div>
           </div>
        </form>
    )
}



export default PizzaForm;