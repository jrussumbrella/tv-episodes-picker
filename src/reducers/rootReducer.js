
const rootReducer = (state, action) => {
	switch(action.type){
		case "FETCH_DATA":
		return {...state, episodes: action.data }
		case "ADD_FAVE":
		return {...state, favourites: [...state.favourites, action.episode ]}
		case "REMOVE_FAVE":
		return {...state, favourites: state.favourites.filter(fave => fave.id !== action.id)}
		case "SEARCH_DATA":
		return {...state, searchEpisodes: action.data}
		case "FETCH_LOADING":
		return {...state, isLoading: true}
		case "FETCH_LOADING_FINISHED":
		return {...state, isLoading: false}	
		case "CLEAR_SEARCH":
		return {...state, searchEpisodes: []}
		default:
	 	return state;
	}

}

export default rootReducer;