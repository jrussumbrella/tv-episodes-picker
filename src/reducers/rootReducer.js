
const rootReducer = (state, action) => {
	switch(action.type){
		case "FETCH_DATA":
		return {...state, episodes: action.data }
		case "ADD_FAVE":
		return {...state, favourites: [...state.favourites, action.episode ]}
		case "REMOVE_FAVE":
		return {...state, favourites: state.favourites.filter(fave => fave.id !== action.id)}
		default:
	 	return state;
	}

}

export default rootReducer;