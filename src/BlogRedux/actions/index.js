import jsonPlaceholder from "../api/jsonplaceholder";
export function getPosts(payload) {
	return {
		type: "FETCH_POSTS",
		payload: payload,
	};
}

export function fetchPosts() {
	return function (dispatch) {
		return jsonPlaceholder.get("/posts").then((response) => {
			dispatch(getPosts(response));
		});
	};
}
