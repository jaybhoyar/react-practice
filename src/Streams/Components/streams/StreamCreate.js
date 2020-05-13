import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
	renderError({ error, touched }) {
		if (touched && error) {
			return <div className="ui red error message">{error}</div>;
		}
	}
	renderInput = ({ input, label, meta }) => {
		const className = `field ${meta.error && meta.touched ? "error" : ""}`;
		return (
			<div className={className}>
				<label>{label}</label>
				<input type="text" {...input} autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit(formValues) {
		console.log(formValues);
	}

	render() {
		return (
			<form
				className="ui form error"
				onSubmit={this.props.handleSubmit(this.onSubmit)}
			>
				<Field
					name="title"
					component={this.renderInput}
					label="Enter Title"
				/>
				<Field
					name="description"
					component={this.renderInput}
					label="Enter Description"
				/>
				<button className="ui button primary">Submit</button>
			</form>
		);
	}
}
const validate = (formValues) => {
	const errors = {};

	if (!formValues.title) {
		errors.title = "You must Enter a Title";
	}
	if (!formValues.description) {
		errors.description = "You must Enter the Description";
	}
	return errors;
};

export default reduxForm({ form: "streamCreate", validate })(StreamCreate);
