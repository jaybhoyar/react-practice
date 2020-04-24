import React, { Component } from "react";

class SearchBar extends Component {
	state = { term: "" };

	handleChange = (e) => {
		this.setState({ term: e.target.value });
	};
	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state.term);
	};
	render() {
		return (
			<>
				<div class="ui two column centered grid">
					<div class="column">
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
