import React from "react";
import "./index.css";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

class App extends React.Component {
	render() {
		return (
			<>
				<ApprovalCard>
					<Comment author="Sam" />
				</ApprovalCard>

				<Comment author="Alex" />
				<Comment author="Jane" />
			</>
		);
	}
}

export default App;
