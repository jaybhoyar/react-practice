import React from "react";
import "./index.css";
import Comment from "./Comment";

class App extends React.Component {
	render() {
		return (
			<div className="ui comments">
				<Comment author="Sam" />
				<Comment author="Alex" />
				<Comment author="Jane" />
			</div>
		);
	}
}

export default App;
