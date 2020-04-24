import React from "react";

const VideoDetail = ({ video }) => {
	if (!video) {
		return <div>..........</div>;
	}
	return (
		<div className="ui segment">
			<div className="ui header">{video.snippet.title}</div>
		</div>
	);
};

export default VideoDetail;
