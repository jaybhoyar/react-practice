import React from "react";

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat < 0 ? "Summer" : "Winter";
	} else {
		return lat > 0 ? "Winter" : "Summer";
	}
};

const seasonConfig = {
	summer: {
		text: "Let's hit the beach",
		iconName: "sun",
	},
	winter: {
		text: "Burr, its chilly",
		iconName: "snowflake",
	},
};

const SeasonDisplay = (props) => {
	const season = getSeason(props.lat, new Date().getMonth());
	const { text, iconName } = seasonConfig[season];
	return (
		<div>
			<i className={`${iconName} icon`} />
			<h1>
				{season === "Winter"
					? "Burr, its chilly"
					: "Lets hit the beach"}
			</h1>
			<i className={`${iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;
