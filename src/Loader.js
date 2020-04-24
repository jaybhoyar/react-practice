import React from "react";

const Loader = () => {
	return (
		<div class="ui active dimmer">
			<div class="ui big  text loader"></div>
		</div>
	);
};
Loader.defaultProps = {
	message: "Loading...",
};

export default Loader;
