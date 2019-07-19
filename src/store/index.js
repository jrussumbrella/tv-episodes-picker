import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/rootReducer';

export const StoreContext = createContext();

export const Provider = (props) => {

  const initialState = {
  	episodes: [],
  	favourites: []
  }

  const [state, dispatch] = useReducer(reducer, initialState, () => {
  	 const data = localStorage.getItem('favourites');
  	 return data ? {...initialState, favourites: JSON.parse(data) } : {...initialState};
  });	

  return (
    <StoreContext.Provider value={{state, dispatch }}>
    	{ props.children }
    </StoreContext.Provider>
  )
}

