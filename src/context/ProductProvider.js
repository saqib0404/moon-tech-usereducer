import React from 'react';
import { useContext } from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { useEffect } from 'react';
import { actionTypes } from '../state/actionTypes';
import { initialState, productReducer } from '../state/ProductState';

const PRODUCT_CONTEXT = createContext()

const ProductProvider = ({ children }) => {
    const [state, dispatch] = useReducer(productReducer, initialState)

    useEffect(() => {
        dispatch({ type: actionTypes.FETCHING_START })
        fetch('products.json')
            .then(res => res.json())
            .then(data => dispatch({ type: actionTypes.FETCHING_SUCCESS, payload: { data } }))
            .catch(e => dispatch({ type: actionTypes.FETCHING_FAILED, payload: e.message }))
    }, [])

    const value = {
        state, dispatch
    }

    return (
        <PRODUCT_CONTEXT.Provider value={value}>
            {children}
        </PRODUCT_CONTEXT.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(PRODUCT_CONTEXT)
    return context
}

export default ProductProvider;