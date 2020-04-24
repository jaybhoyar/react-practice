import React from "react";

const VideoDetail = ({ video }) => {
	console.log("video   =>", video);
	if (!video) {
		return <div>loading....</div>;
	}

	const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
	return (
		<>
			<div class="ui embed">
				<iframe title="youtube player" src={videoSrc} />
			</div>
			<div className="ui segment">
				<div className="ui header">{video.snippet.title}</div>
				<p className="">{video.snippet.description}</p>
			</div>
		</>
	);
};

export default VideoDetail;
