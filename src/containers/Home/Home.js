 import React, { Suspense, lazy, useEffect, useContext } from 'react';
import { StoreContext, DispatchContext } from '../../store';
import { fetchData, clearData } from '../../actions';
import styled from 'styled-components';

const EpisodeList = lazy(() => import('../../components/EpisodeList/EpisodeList'))

const Container = styled.div`
	max-width: 1200px;
	margin 0 auto;
`

const Home = (props) => {

 const state = useContext(StoreContext);
 const dispatch = useContext(DispatchContext);

  useFetchEpisodes(); 

  // run everytime addfave/removefave is click
  useEffect(() => {
      localStorage.setItem('favourites', JSON.stringify(state.favourites));
  }, [state.favourites]);  

 function useFetchEpisodes(){
   useEffect(() => {
    state.episodes.length === 0 && fetchData(dispatch);
    return () => clearData(dispatch);
  }, [])    
 }


  return (
    <Container >
      <Suspense  fallback={<div>Loading...</div>}>
      {
        state.isLoading ?
        <div> Loading .... </div>
        :
    	  <EpisodeList episodes={ state.episodes }  />
      }
      </Suspense> 
    </Container>
  )
}

export default Home;