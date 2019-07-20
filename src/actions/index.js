import axios from '../api';


export const fetchData = async dispatch => {
	try{
		dispatch({ type: "FETCH_LOADING"});
		const res = await axios.get('/singlesearch/shows?q=rick-&-morty&embed=episodes');
		const data = res.data._embedded.episodes;
		await dispatch({ type: "FETCH_DATA", data });
		dispatch({ type: "FETCH_LOADING_FINISHED"});
	}catch(err){
		console.log(err);
	}
}

export const toggleFave = (dispatch, state, episode) => {
	const isFave = state.favourites.find( fav => fav.id === episode.id);

	if (isFave) { 
		dispatch({ type: "REMOVE_FAVE", id: episode.id })
	}else{
		dispatch({ type: "ADD_FAVE", episode});	
	}
	
}


export const searchData = async (dispatch, keyword) => {
	try{
		dispatch({ type: "FETCH_LOADING"});
		const res = await axios.get('/singlesearch/shows?q=rick-&-morty&embed=episodes');
		const data = res.data._embedded.episodes;
		const filter = data.filter( episode => episode.name.indexOf(keyword) > -1);
		dispatch({type: "SEARCH_DATA", data: filter })
		dispatch({ type: "FETCH_LOADING_FINISHED"});
	}catch(err){
		console.log(err);
	}	
	
}

export const clearData = (dispatch) => {
	dispatch({ type: "FETCH_LOADING"});
}

export const clearSearch = (dispatch) => {
	dispatch({ type: "CLEAR_SEARCH"});
}