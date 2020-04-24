import axios from "axios";

const KEY = "AIzaSyAU44Y0l3RulKobax714eAUJcMDQZ7I-PE";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		maxResults: 5,
		key: KEY,
	},
});
