import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "./api/youtube";
import VideoDetail from "./VideoDetail";

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
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.getSearchTerm} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								videoSelect={this.onVideoSelect}
								videos={this.state.videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
