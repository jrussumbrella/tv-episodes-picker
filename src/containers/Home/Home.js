 import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../store';
import { fetchData } from '../../actions';
import EpisodeList from '../../components/EpisodeList/EpisodeList';
import styled from 'styled-components';

const Container = styled.div`
	width: 1200px;
	margin 0 auto;
`

const Home = (props) => {

 const { state, dispatch } = useContext(StoreContext);

  useEffect(() => {
  	state.episodes.length === 0 && fetchData(dispatch);
  	localStorage.setItem('favourites', JSON.stringify(state.favourites))
  }, [state])

  return (
    <Container >
    	<EpisodeList episodes={ state.episodes }  />
    </Container>
  )
}

export default Home;