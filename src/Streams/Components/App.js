import React from "react";
import { Route } from "react-router-dom";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import Header from "./Header";

const App = () => {
	return (
		<div className="ui container">
			<Header />
			<Route path="/" exact component={StreamList} />
			<Route path="/streams/new" component={StreamCreate} />
			<Route path="/streams/show" component={StreamShow} />
			<Route path="/streams/delete" component={StreamDelete} />
			<Route path="/streams/edit" component={StreamEdit} />
		</div>
	);
};

export default App;
