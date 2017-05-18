// Define Reducer
const intialState = {
  songs: []
};

export default function songsReducer(state = intialState, action) {
  switch (action.type) {
    case "SONGS_FETCH":
        console.log(action);
        return null

    case "SONGS_FETCH_SUCCESS":
      return { ...state, songs: action.payload };

    case "SONGS_FETCH_ERROR":
        console.log(action);
        return { ...action.payload }
        
    default:
      return state; // Always return the origial state if the actions don't match
  }
}
