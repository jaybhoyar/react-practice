import React, { Component } from "react";
import Weather from "./Weather/index";
import unsplash from "./CarList/api/unsplash";
import SearchBox from "./CarList/SearchBox";
import ImagesList from "./CarList/ImagesList";

class App extends Component {
	state = { images: [] };

	onSearchSubmit = async (term) => {
		const res = await unsplash.get("/search/photos", {
			params: { query: term },
		});
		this.setState({ images: res.data.results });
	};
	render() {
		return (
			<>
				<div className="ui container" style={{ marginTop: "30px" }}>
					<SearchBox onSubmit={this.onSearchSubmit} />
					<ImagesList images={this.state.images} />
				</div>
			</>
		);
	}
}

export default App;
