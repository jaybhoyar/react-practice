import React from "react";
import { connect } from "http2";

const SongsDetail = (props) => {
	console.log(props);
	return <div>SongsDetail</div>;
};
const mapStateToProps = (state) => {
	return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongsDetail);
