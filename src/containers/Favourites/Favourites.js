import React, { useContext, useEffect } from 'react';
import { StoreContext, DispatchContext } from '../../store';
import styled from 'styled-components';
import { fetchData } from '../../actions';
import EpisodeList from '../../components/EpisodeList/EpisodeList';

const Container = styled.div`
	max-width: 1200px;
	margin 0 auto;
`

const Favourites = (props) => {
 
 const state = useContext(StoreContext);
 const dispatch = useContext(DispatchContext);

 useEffect(() => {
 	window.scrollTo(0, 0);
 }, []);

 useFetchFave();

 function useFetchFave(){
 	useEffect(() => {
	 	dispatch({type:"FETCH_LOADING_FINISHED"});
	 	localStorage.setItem('favourites', JSON.stringify(state.favourites))
	}, [state.favourites]);
 }

 
  return (
    <Container> 
    {
    	state.isLoading ?
    	<div> Loading ... </div>
    	:
    	<EpisodeList episodes={ state.favourites }/>
    }
    </Container>
  )
}

export default Favourites;