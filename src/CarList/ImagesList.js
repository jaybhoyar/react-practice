import React from "react";
import ImageCard from "./ImageCard";
import "./style.css";

const ImagesList = (props) => {
	console.log(props.images);
	const images = props.images.map((image) => {
		return <ImageCard key={image.id} image={image} />;
	});
	return <div className="image-list">{images}</div>;
};

export default ImagesList;
