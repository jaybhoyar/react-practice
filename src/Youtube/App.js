import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";

import youtube from "./api/youtube";

class App extends Component {
	state = { videos: [], selectedVideo: null };

	getSearchTerm = async (term) => {
		const res = await youtube.get("/search", {
			params: {
				part: "snippet",
				maxResults: 5,
				key: "AIzaSyAU44Y0l3RulKobax714eAUJcMDQZ7I-PE",
				q: term,
			},
		});
		this.setState({ videos: res.data.items });
	};
	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
		console.log(this.state);
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.getSearchTerm} />
				<VideoList
					videoSelect={this.onVideoSelect}
					videos={this.state.videos}
				/>
			</div>
		);
	}
}

export default App;
