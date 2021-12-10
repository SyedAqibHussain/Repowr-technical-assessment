import { GET_GROUPS_LIST, CREATE_GROUP } from '../../constants';

const initialState = {
	processing: false,
	groups: [],
	error: false,
};

export const groupsListReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_GROUPS_LIST:
			return {
				processing: false,
				groups: [
					{
						id: 0,
						name: 'all',
					},
					{
						id: 1,
						name: 'cars',
					},
					{
						id: 2,
						name: 'games',
					},
				],
			};
		case CREATE_GROUP:
			const newGroup = {
				id: state.groups.length,
				name: action.groupName,
			};

			return {
				...state,
				processing: false,
				groups: [...state.groups, newGroup],
			};
		default:
			return state;
	}
};
