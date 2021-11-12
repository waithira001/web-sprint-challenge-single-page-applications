import React from 'react';
import * as yup from 'yup';

const formSchema = yup.object().shape({
    customerName: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    pizzaSize: yup
        .string()
        .oneOf(['small', 'medium', 'large'], 'Pizza size is required'),
    pineapple: yup.boolean(),
    sausage: yup.boolean(),
    cilantro: yup.boolean(),
    onion: yup.boolean(),
    chicken: yup.boolean(),
    tomato: yup.boolean(),
    olives: yup.boolean()
});
export default formSchema; 