
const rootReducer = (state, action) => {
	switch(action.type){
		case "FETCH_DATA":
		return {...state, episodes: action.data }
		case "ADD_FAVE":
		return {...state, favourites: [...state.favourites, action.episode ]}
		case "REMOVE_FAVE":
		return {...state, favourites: state.favourites.filter(fave => fave.id !== action.id)}
		case "SEARCH_DATA":
		console.log(action.keyword);
		return {...state}
		default:
	 	return state;
	}

}

export default rootReducer;