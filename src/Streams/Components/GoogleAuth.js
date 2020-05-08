import React, { Component } from "react";
import { runInThisContext } from "vm";

class GoogleAuth extends Component {
	state = { isSignedIn: null };

	componentDidMount() {
		window.gapi.load("client:auth2", () => {
			window.gapi.client
				.init({
					clientId:
						"852470058184-8j2pu636ahaahdlnip5tt58tsq1fb9bp.apps.googleusercontent.com",
					scope: "email",
				})
				.then(() => {
					this.auth = window.gapi.auth2.getAuthInstance();
					this.setState({ isSignedIn: this.auth.isSignedIn.get() });
				});
		});
	}
	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return <div>Status unrecognised</div>;
		} else if (this.state.isSignedIn) {
			return <div>I am Signed In </div>;
		} else {
			return <div>I am not Signed In </div>;
		}
	}
	render() {
		return <div>{this.renderAuthButton}</div>;
	}
}

export default GoogleAuth;
