import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../store';
import { fetchData } from '../../actions';
import EpisodeList from '../../components/EpisodeList/EpisodeList';

const Home = (props) => {

 const { state, dispatch } = useContext(StoreContext);


  useEffect(() => {
  	state.episodes.length === 0 && fetchData(dispatch);
  	localStorage.setItem('favourites', JSON.stringify(state.favourites))
  }, [state])

  return (
    <div>
    	<EpisodeList episodes={ state.episodes }  />
    </div>
  )
}

export default Home;