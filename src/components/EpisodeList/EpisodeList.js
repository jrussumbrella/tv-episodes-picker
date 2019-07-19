import React, { useContext }  from 'react';
import EpisodeItem from '../EpisodeItem/EpisodeItem';
import { StoreContext } from '../../store';
import { addToFave } from '../../actions';

const EpisodeList = ({ episodes }) => {

 const { state, dispatch } = useContext(StoreContext);  



 const handleAddFave = (episode) => {
    addToFave(dispatch, state, episode)
 }

  return (
    <div style={{ display: "flex", flexWrap: "wrap"}}> 
    	{
    		episodes && episodes.map( episode => (
    			<EpisodeItem 
    			  key={episode.id}
    			  {...episode}
    			>
                    <button 
                    onClick={ () => handleAddFave(episode) }> 
                    {
                    state.favourites.find( fave => fave.id === episode.id ) 
                    ? 'Remove to Favorites' : 'Add to Favorites' 
                    }
                    </button>
                </EpisodeItem>
    		))
    	} 
    </div>
  )
}

export default EpisodeList;