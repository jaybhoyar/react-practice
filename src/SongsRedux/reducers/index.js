import { combineReducers } from "redux";

const songsReducer = () => {
	return [
		{ title: "Naina Da Kya Kasoor", duration: "3:30" },
		{ title: "Laila Laila", duration: "5:30" },
		{ title: "Ud-Daa Punjab", duration: "4:30" },
		{ title: "Namo Namo", duration: "4:10" },
		{ title: "Manja", duration: "3:50" },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer,
});
