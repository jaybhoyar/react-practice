import React, { Component } from "react";

class SearchBox extends Component {
	state = { term: "" };

	handleSubmit = (e) => {
		e.preventDefault();

		this.props.onSubmit(this.state.term);
		this.setState({ term: "" });
	};
	render() {
		return (
			<div className="ui segment">
				<form onSubmit={this.handleSubmit} className="ui form">
					<div className="field">
						<label>Image Search</label>
						<input
							type="text"
							value={this.state.term}
							onChange={(e) =>
								this.setState({ term: e.target.value })
							}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBox;
