
import React, {createContext, useContext, useReducer} from "react";

// Preparing data layer
export const DataLayerContext = createContext();
 
// Creating data layer
export const DataLayer = ({initialState, reducer, children }) => (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </DataLayerContext.Provider>
);

export const useDataLayerValue = () =>  useContext(DataLayerContext); 