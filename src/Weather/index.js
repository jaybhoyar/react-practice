import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "../Loader";

class Weather extends Component {
	state = { lat: null, errorMessage: "" };

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(postion) => this.setState({ lat: postion.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}
	render() {
		if (!this.state.lat && this.state.errorMessage) {
			return (
				<div>
					<h1> Error: {this.state.errorMessage}</h1>
				</div>
			);
		}
		if (this.state.lat && !this.state.errorMessage) {
			return <SeasonDisplay lat={this.state.lat} />;
		}
		return <Loader message="Please accept location request" />;
	}
}

export default Weather;
