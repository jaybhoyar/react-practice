import React, { Component } from "react";

class SearchBar extends Component {
	state = { term: "" };

	handleChange = (e) => {
		this.setState({ term: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.term);
		this.setState({ term: "" });
	};

	render() {
		return (
			<>
				<div className="ui two column centered grid">
					<div className="column">
						<div className="ui segment">
							<form
								onSubmit={this.handleSubmit}
								className="ui form"
							>
								<div className="field">
									<label className="centre">Youtube</label>
									<input
										type="text"
										value={this.state.term}
										onChange={this.handleChange}
									/>
								</div>
							</form>
						</div>
					</div>
				</div>
			</>
		);
	}
}

export default SearchBar;
