/* Function to POST data */

const postData = async (url = '', data = {}) => {

	const res = await fetch(url, {
		method: 'POST',
		credentials: 'same-origin',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});

	try {
		const newData = await res.json();
		return newData;

	} catch(error) {
		console.log('error', error);
		alert(`Oops! The request failed.
The provided destination may be invalid, please check your entry and try again.`);
	}
};

export { postData }