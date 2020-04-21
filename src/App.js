import React from "react";
import "./index.css";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";
import SeasonDisplay from "./SeasonDisplay";

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = { lat: null, errorMessage: "" };
	}
	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(postion) => this.setState({ lat: postion.coords.latitude }),
			(err) => this.setState({ errorMessage: err.message })
		);
	}
	render() {
		return (
			<>
				{this.state.lat ? (
					<SeasonDisplay lat={this.state.lat} />
				) : (
					<div>Error: {this.state.errorMessage}</div>
				)}

				{/* <ApprovalCard>
            <Comment author="Sam" />
          </ApprovalCard>
          <ApprovalCard>
            <Comment author="Alex" />
          </ApprovalCard>
          <ApprovalCard>
            <Comment author="Jane" />
          </ApprovalCard> */}
			</>
		);
	}
}

export default App;
