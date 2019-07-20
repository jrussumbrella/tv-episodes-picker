import React, { useContext }  from 'react';
import EpisodeItem from '../EpisodeItem/EpisodeItem';
import { StoreContext, DispatchContext } from '../../store';
import { toggleFave } from '../../actions';
import styled from 'styled-components';
import Button from '../Button';
import EmptyItem from '../EmptyItem/EmptyItem';
import { FiHeart } from "react-icons/fi";

const EpisodeList = ({ episodes }) => {

 const state  = useContext(StoreContext);  
 const dispatch = useContext(DispatchContext);

 const handleToggleFave = (episode) => {
    toggleFave(dispatch, state, episode)
 }

 const Wrapper = styled.div`
 display: flex;
 flex-wrap: wrap;  
 margin: 0 -7.5px; 
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
                   <div onClick={ () => handleToggleFave(episode) }>
                   {
                        state.favourites.find( fave => fave.id === episode.id ) 
                        ?  
                        <FiHeart style={{ fill: "#d63031", stroke: "#d63031"}} /> :  <FiHeart />                         
                    }
                    </div>
                </EpisodeItem>
    		))
            :
            <EmptyItem 
              msg={'No items yet!'}
            /> 
    	} 
    </Wrapper>
  )
}

export default EpisodeList;