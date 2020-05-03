import jsonPlaceholder from "../api/jsonplaceholder";

export function fetchPosts() {
	return function (dispatch) {
		return jsonPlaceholder.get("/posts").then((response) => {
			dispatch({ type: "FETCH_POSTS", payload: response });
		});
	};
}
