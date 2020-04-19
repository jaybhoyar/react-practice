import React from "react";
import "./index.css";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard";

class App extends React.Component {
	render() {
		window.navigator.geolocation.getCurrentPosition((postion, err) => {
			if (err) console.log(err);
			console.log(postion);
		});
		return (
			<>
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
