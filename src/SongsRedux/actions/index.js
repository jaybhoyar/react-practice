export const selectSongs = (song) => {
	return {
		type: "SONG_SELECTED",
		payload: song,
	};
};
