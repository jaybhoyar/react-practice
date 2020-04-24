import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, videoSelect }) => {
	const list = videos.map((video) => {
		return (
			<VideoItem
				key={video.id.videoId}
				onVideoSelect={videoSelect}
				video={video}
			/>
		);
	});
	return <div className="ui relaxed divided list">{list}</div>;
};

export default VideoList;
