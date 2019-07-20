import React, { useEffect, useContext } from 'react';
import { StoreContext, DispatchContext } from '../../store';
import { searchData, clearSearch } from '../../actions';
import styled from 'styled-components';
import EpisodeList from '../../components/EpisodeList/EpisodeList';

const Container = styled.div`
	max-width: 1200px;
	margin 0 auto;
`

const Search = ({ match }) => {
  
  const { keyword } = match.params;
  const state = useContext(StoreContext);
  const dispatch  = useContext(DispatchContext);

  useEffect(() => {
  	 searchData(dispatch, keyword);	
     // clean up search when components mount
     return () => clearSearch(dispatch);
  }, [keyword]);
 
  return (
    <Container>
    {
      state.isLoading ?
      <div> Loading.... </div>
      :
        <EpisodeList episodes={ state.searchEpisodes }/>
    }
    </Container>
  )
}

export default Search;