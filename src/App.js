import React, { useState, useEffect } from "react";
import { Route, Link, Switch, BrowserRouter } from 'react-router-dom';
import Confirmation from "./Confirmation";
import Order from "./Order";
import schema from './Form Schema';
import * as yup from 'yup';
import Home from "./Home";

const initialFormValues = {
    customerName: '',
    pizzaSize: '',
    pineapple: false,
    sausage: false,
    cilantro: false,
    onion: false,
    chicken: false,
    tomato: false,
    olives: false,
    special: ''
};

const initialFormErrors = {
    customerName: '',
    pizzaSize: ''
};

const initialDisabled = true;

export default function App()
{
    const [formValues, setFormValues] = useState(initialFormValues); // object
    const [formErrors, setFormErrors] = useState(initialFormErrors); // object
    const [confirmation, setConfirmation] = useState(initialFormValues);
    const [disabled, setDisabled] = useState(initialDisabled);       // boolean

    const setNewOrder = (newOrder) =>
    {
        setConfirmation(newOrder);
        setFormValues(initialFormValues);
    };

    const validate = (name, value) =>
    {
        yup.reach(schema, name)
            .validate(value)
            .then(() => setFormErrors({ ...formErrors, [name]: '' }))
            .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
    };

    const inputChange = (name, value) =>
    {
        validate(name, value);
        setFormValues({
            ...formValues,
            [name]: value
        });
    };

    const formSubmit = () =>
    {
        const newOrder = {
            customerName: formValues.customerName.trim(),
            pizzaSize: formValues.pizzaSize,
            toppings: ['pineapple', 'sausage', 'cilantro', 'onion', 'chicken', 'tomato', 'olives'].filter(topping => !!formValues[topping]),
            special: formValues.special.trim()
        };

        setNewOrder(newOrder);
    };

    useEffect(() =>
    {
        schema.isValid(formValues).then(valid => setDisabled(!valid));
    }, [formValues]);

        
    return (
      <div className='container'>
          <nav>
              <h1 className='pizza-header'>Lambda Eats</h1>
              <div className='nav-links'>
              </div>
          </nav>
        <BrowserRouter>
          <Switch>
              <Route path="/pizza">
                <Link to="https://reqres.in/api/orders">Order</Link>
                  <Order
                      values={formValues}
                      change={inputChange}
                      submit={formSubmit}
                      disabled={disabled}
                      errors={formErrors}
                  />
              </Route>
              <Route path="/pizza/confirmation">
                  <Confirmation details={confirmation} />
              </Route>
              <Route path="/">
                <Link to="/">Home</Link>
                  <Home/>
              </Route>
          </Switch>
        </BrowserRouter>
      </div>
  );
}; 