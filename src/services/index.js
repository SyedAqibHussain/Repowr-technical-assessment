import API from './HttpService';

export const getUsersListService = () => {
	return API.get(`/persons?_quantity=4`)
		.then((res) => {
			return res.data.data;
		})
		.catch((error) => {
			console.log(error);
		});
};
