import React, { useContext }  from 'react';
import EpisodeItem from '../EpisodeItem/EpisodeItem';
import { StoreContext } from '../../store';
import { addToFave } from '../../actions';
import styled from 'styled-components';
import Button from '../Button';
import EmptyItem from '../EmptyItem/EmptyItem';

const EpisodeList = ({ episodes }) => {

 const { state, dispatch } = useContext(StoreContext);  

 const handleAddFave = (episode) => {
    addToFave(dispatch, state, episode)
 }

 const Wrapper = styled.div`
 display: flex;
 flex-wrap: wrap;   
 `

  return (
    <Wrapper> 
    	{
            episodes && episodes.length > 0 
            ?
    		 episodes.map( episode => (
    			<EpisodeItem 
    			  key={episode.id}
    			  {...episode}
    			>
                   <div onClick={ () => handleAddFave(episode) }>
                    <Button
                        primary 
                        text={
                        state.favourites.find( fave => fave.id === episode.id ) 
                        ? 'Remove to Favorites' : 'Add to Favorites'                         
                        }
                    /> 
                    </div>
                </EpisodeItem>
    		))
            :
            <EmptyItem 
              msg={'No favourites yet!'}
            /> 
    	} 
    </Wrapper>
  )
}

export default EpisodeList;