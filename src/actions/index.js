import axios from '../api';


export const fetchData = async dispatch => {
	try{
		const res = await axios.get('/singlesearch/shows?q=rick-&-morty&embed=episodes');
		const data = res.data._embedded.episodes;
		dispatch({ type: "FETCH_DATA", data });
	}catch(err){
		console.log(err);
	}
}

export const addToFave = (dispatch, state, episode) => {
	const isFave = state.favourites.includes(episode);
	if (isFave) {
		dispatch({ type: "REMOVE_FAVE", id: episode.id })
	}else{
		dispatch({ type: "ADD_FAVE", episode});	
	}
	

}