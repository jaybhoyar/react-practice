import React from "react";
import VideoItem from "./VideoItem";

const VideoList = (props) => {
	console.log(props.videos);
	const list = props.videos.map((video) => {
		return <VideoItem video={video} />;
	});
	return <div className="ui relaxed divided list">{list}</div>;
};

export default VideoList;
