const URL = "graphql"

export function requestToGraphQl(queryObj) {
	return fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(queryObj),
	}).then((response) => response.json());
}
