import React, { useEffect, useContext } from 'react';
import { StoreContext } from '../../store';
import { searchData } from '../../actions';
import styled from 'styled-components';
import EpisodeList from '../../components/EpisodeList/EpisodeList';

const Container = styled.div`
	width: 1200px;
	margin 0 auto;
`

const Search = ({ match }) => {
  
  const { keyword } = match.params;
  const { state, dispatch } = useContext(StoreContext);
 

  useEffect(() => {
  	 searchData(dispatch, keyword);	
  }, [keyword]);
 
  return (
    <Container>
      <EpisodeList episodes={ state.episodes }/>
    </Container>
  )
}

export default Search;