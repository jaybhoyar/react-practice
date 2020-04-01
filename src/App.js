import React from "react";
import "./index.css";
class App extends React.Component {
	state = { styleOne: {}, styleTwo: {} };

	onMouseMove = event => {
		this.setState({
			styleOne: transform(-event.clientX / event.clientY),
			styleTwo: transform(event.clientX / event.clientY)
		});
	};

	render() {
		return (
			<div onMouseMove={this.onMouseMove}>
				<div className="panel" style={this.state.styleOne} />
				<div className="panel" style={this.state.styleTwo} />
			</div>
		);
	}
}

export default App;
