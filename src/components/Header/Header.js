import React, { useContext } from 'react';
import { StoreContext } from '../../store';


const Header = (props) => {
  const { state } = useContext(StoreContext);	
  return (
    <div>
    	Favorites { state.favourites.length }
    </div>
  )
}

export default Header;