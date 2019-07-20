import React, { useContext, useEffect } from 'react';
import { StoreContext } from '../../store';
import styled from 'styled-components';
import { fetchData } from '../../actions';
import EpisodeList from '../../components/EpisodeList/EpisodeList';

const Container = styled.div`
	width: 1200px;
	margin 0 auto;
`

const Favourites = (props) => {
 
 const { state, dispatch } = useContext(StoreContext);

 useEffect(() => {
 	localStorage.setItem('favourites', JSON.stringify(state.favourites))
 }, [state]);

 
  return (
    <Container> 
    	<EpisodeList episodes={ state.favourites }/>
    </Container>
  )
}

export default Favourites;