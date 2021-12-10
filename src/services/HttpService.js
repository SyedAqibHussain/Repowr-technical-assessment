import axios from 'axios';

const REACT_APP_BASE_URL = 'https://fakerapi.it/api/v1/';

const DEFAULT_HEADERS = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
};

// Axios instance
export default axios.create({
	baseURL: REACT_APP_BASE_URL,
	timeout: 60000,
	headers: DEFAULT_HEADERS,
});
