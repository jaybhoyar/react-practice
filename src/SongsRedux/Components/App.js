import React from "react";
// import { selectSong } from "../actions";
import SongList from "./SongList";
import SongsDetail from "./SongsDetail";

const App = () => {
	return (
		<div style={{ marginTop: "20px" }} className="ui container grid">
			<div className="ui row">
				<div style={{ padding: "10px" }} className="column eight wide">
					<SongList />
				</div>
				<div
					style={{ textAlign: "center" }}
					className="column eight wide"
				>
					<SongsDetail />
				</div>
			</div>
		</div>
	);
};

export default App;
