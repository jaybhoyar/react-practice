import React from "react";
import { Route, Link } from "react-router-dom";
import StreamList from "./Components/StreamList";

const App = () => {
	return (
		<div>
			<Route path="/" component={StreamList} />
		</div>
	);
};

export default App;
