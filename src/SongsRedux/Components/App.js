import React from "react";
// import { selectSong } from "../actions";
import SongList from "./SongList";
import SongsDetail from "./SongsDetail";

const App = () => {
	return (
		<div className="ui container grid">
			<div className="ui row">
				<div className="column eight wide">
					<SongList />
				</div>
				<div className="column eight wide">
					<SongsDetail />
				</div>
			</div>
		</div>
	);
};

export default App;
