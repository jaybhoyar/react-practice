import React from "react";
import "./index.css";
import Comment from "./Comment";

class App extends React.Component {
	render() {
		return (
			<div className="ui comments">
				<Comment />
				<Comment />
				<Comment />
			</div>
		);
	}
}

export default App;
