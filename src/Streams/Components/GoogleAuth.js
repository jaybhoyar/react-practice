import React, { Component } from "react";

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
					// this.setState({ isSignedIn: this.auth.isSignedIn.get() });
					this.onAuthChange();
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = () => {
		this.setState({ isSignedIn: this.auth.isSignedIn.get() });
	};

	onSignIn = () => {
		console.log("in Sign In");
		this.auth.signIn();
	};

	onSignOut = () => {
		console.log("in Sign Out");
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.state.isSignedIn === null) {
			return <div>Status unrecognised</div>;
		} else if (this.state.isSignedIn) {
			return (
				<button
					onClick={this.onSignOut}
					className="ui positive google button"
				>
					<i className="google icon"></i>
					Sign Out
				</button>
			);
		} else {
			return (
				<button
					onClick={this.onSignIn}
					className="ui positive google button"
				>
					<i className="google icon"></i>
					Sign In
				</button>
			);
		}
	}
	render() {
		return <div>{this.renderAuthButton()}</div>;
	}
}

export default GoogleAuth;
