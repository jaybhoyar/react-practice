import React, { Component } from "react";

class SearchBar extends Component {
	render() {
		return (
			<>
				<div class="ui two column centered grid">
					<div class="column">
						<div className="ui segment">
							<form className="ui form">
								<div className="field">
									<label className="centre">Youtube</label>
									<input type="text" />
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
