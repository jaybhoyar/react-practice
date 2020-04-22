import React, { Component } from "react";
import Weather from "./Weather/index";
import axios from "axios";
import SearchBox from "./CarList/SearchBox";

class App extends Component {
	async onSearchSubmit(term) {
		const res = await axios.get("https://api.unsplash.com/search/photos", {
			params: { query: term },
			headers: {
				Authorization:
					"Client-ID xhNXYsd8EHQz9dDwpb7FSHmpwbGfMe99bVpxCFR3xu8",
			},
		});

		console.log(res.data.results);
	}
	render() {
		return (
			<>
				<div className="ui container" style={{ marginTop: "30px" }}>
					<SearchBox onSubmit={this.onSearchSubmit} />
				</div>
			</>
		);
	}
}

export default App;
