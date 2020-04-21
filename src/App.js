import React, { Component } from "react";
import Weather from "./Weather/index";
import SearchBox from "./CarList/SearchBox";

class App extends Component {
	render() {
		return (
			<>
				<div className="ui container" style={{ marginTop: "30px" }}>
					<SearchBox />
				</div>
			</>
		);
	}
}

export default App;
