// import { createContext } from "jest-runtime"
import React, { createContext, useContext, useReducer } from 'react'

//prepping the data layer/ state
export const StateContext = createContext()


//wrapping app and provide the data layer
export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
)

//pull info from the data layer
export const useStateValue = () => useContext(StateContext)