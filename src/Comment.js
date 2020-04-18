import React from "react";
import faker from "faker";
import ApprovalCard from "./ApprovalCard";

const Comment = (props) => {
	return (
		<div className="comment">
			<a herf="#" className="avatar">
				<img src={faker.image.avatar()} />
			</a>
			<div className="content">
				<a className="author">{props.author}</a>
				<div className="metadata">
					<span className="date">Yesterday at 12:30AM</span>
				</div>
				<div className="text">
					<p>This has been very useful for my research.</p>
				</div>
				<div className="actions">
					<a className="reply">Reply</a>
				</div>
			</div>
			<ApprovalCard />
		</div>
	);
};

export default Comment;
