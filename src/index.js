import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
// import App from "./App";
// import App from "./Youtube/App";
// import App from "./SongsRedux/Components/App";
// import App from "./BlogRedux/components/App";
import App from "./Streams/Components/App";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./SongsRedux/reducers";

ReactDOM.render(
	// <Provider store={createStore(reducers)}>
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	// </Provider>
	document.getElementById("root")
);
