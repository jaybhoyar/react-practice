import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

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
					this.onAuthChange(this.auth.isSignedIn.get());
					this.auth.isSignedIn.listen(this.onAuthChange);
				});
		});
	}

	onAuthChange = (isSignedIn) => {
		if (isSignedIn) {
			this.props.signIn();
		} else {
			this.props.signOut();
		}
	};

	handleSignIn = () => {
		console.log("in Sign In");
		this.auth.signIn();
	};

	handleSignOut = () => {
		console.log("in Sign Out");
		this.auth.signOut();
	};

	renderAuthButton() {
		if (this.props.isSignedIn === null) {
			return null;
		} else if (this.props.isSignedIn) {
			return (
				<button
					onClick={this.handleSignOut}
					className="ui positive google button"
				>
					<i className="google icon"></i>
					Sign Out
				</button>
			);
		} else {
			return (
				<button
					onClick={this.handleSignIn}
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
const mapStateToProps = (state) => {
	return { isSignedIn: state.auth.isSignedIn };
};
export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
