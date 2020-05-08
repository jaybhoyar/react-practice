import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="ui secondary pointing menu">
			<Link to="/" class="item">
				Twitch
			</Link>
			<div class="right menu">
				<Link to="/streams/edit" class="item">
					All Streams
				</Link>
			</div>
		</div>
	);
};

export default Header;
