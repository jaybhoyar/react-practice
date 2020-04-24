import React from "react";
import "./style.css";

const VideoItem = ({ video }) => {
	return (
		<div className="flex item">
			<img
				clasName="ui image"
				src={video.snippet.thumbnails.medium.url}
			/>
			<div className="content">
				<div className="header">{video.snippet.title}</div>
			</div>
		</div>
	);
};

export default VideoItem;
