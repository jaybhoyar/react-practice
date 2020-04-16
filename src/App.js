import React from "react";
import "./index.css";

// function transform(offset) {
// 	const cos = Math.cos(offset);
// 	const sin = Math.sin(offset);
// 	return {
// 		transform: `matrix3d(${sin}, ${-cos}, ${sin}, 0, ${-cos}, ${sin}, 0, 0, 0, ${cos}, ${cos}, ${sin}, 0, 0, 0, 1)`
// 	};
// }

class App extends React.Component {
	// state = { styleOne: {}, styleTwo: {} };

	// onMouseMove = event => {
	// 	this.setState({
	// 		styleOne: transform(-event.clientX / event.clientY),
	// 		styleTwo: transform(event.clientX / event.clientY)
	// 	});
	// };

	render() {
		return (
			<div>
				<label className="label" htmlFor="name">
					Enter Name:
				</label>
				<input id="name" type="text" />
				<button style={{backgroundColor:'blue', color:'white'}}>
					Submit
				</button>
			</div>
		);
	}
}

export default App;
