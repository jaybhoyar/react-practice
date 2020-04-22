import React, { Component } from "react";
import Weather from "./Weather/index";
import unsplash from "./api/unsplash";
import SearchBox from "./CarList/SearchBox";

class App extends Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const res = await unsplash.get("/search/photos", {
			params: { query: term },
		});
		this.setState({ images: res.data.results });
		console.log(this.state);
	};
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
