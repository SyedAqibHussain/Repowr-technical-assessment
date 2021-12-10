import {
	GET_USERS_LIST_REQUEST,
	GET_USERS_LIST_SUCCESS,
	GET_USERS_LIST_ERROR,
	UPDATE_USERS_LIST,
	GET_SELECTED_USER,
	LEAVE_GROUP,
	JOIN_GROUP,
} from '../../constants';

const initialUserListState = {
	processing: false,
	users: [],
	error: false,
};

const initialSelectedUserState = {
	selectedUser: 0,
};

export const usersListReducer = (state = initialUserListState, action) => {
	switch (action.type) {
		case GET_USERS_LIST_REQUEST:
			return {
				...state,
				processing: true,
			};
		case GET_USERS_LIST_SUCCESS:
			return {
				...state,
				processing: false,
				users: action.usersList,
			};
		case GET_USERS_LIST_ERROR:
			return {
				...state,
				processing: false,
				error: action.error,
			};
		case UPDATE_USERS_LIST:
			let userId = 0;
			var modifiedArray = action.usersList.map((el, index) => {
				var item = Object.assign({}, el);
				item.id = userId++;
				if (index >= 2) {
					item.groupId = [2];
				} else {
					item.groupId = [1];
				}
				return item;
			});

			return {
				...state,
				processing: false,
				users: modifiedArray,
				error: false,
			};
		case LEAVE_GROUP:
			let leaveGroupArray = [...action.usersList];

			const index = leaveGroupArray[action.userId].groupId.indexOf(
				action.groupId
			);

			if (index > -1) {
				leaveGroupArray[action.userId].groupId.splice(index, 1);
			}

			return {
				...state,
				processing: false,
				users: leaveGroupArray,
				error: action.error,
			};
		case JOIN_GROUP:
			let joinGroupArray = [...action.usersList];

			joinGroupArray[action.userId].groupId.push(action.groupId);

			return {
				...state,
				processing: false,
				users: joinGroupArray,
				error: action.error,
			};
		default:
			return state;
	}
};

export const selectedUserReducer = (
	state = initialSelectedUserState,
	action
) => {
	switch (action.type) {
		case GET_SELECTED_USER:
			return { selectedUser: action.userId };
		default:
			return state;
	}
};
