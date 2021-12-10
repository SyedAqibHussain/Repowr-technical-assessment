import { getUsersListService } from '../../services/index';

import {
	GET_USERS_LIST_REQUEST,
	GET_USERS_LIST_SUCCESS,
	GET_USERS_LIST_ERROR,
	UPDATE_USERS_LIST,
	GET_GROUPS_LIST,
	GET_SELECTED_USER,
	LEAVE_GROUP,
	JOIN_GROUP,
	CREATE_GROUP,
} from '../constants';

export const getUsersListAction = (params) => {
	return (dispatch) => {
		dispatch(getUsersListRequest());
		getUsersListService(params)
			.then((res) => {
				dispatch(getUsersListSuccess(res));
				dispatch(updateUsersListAction(res));
			})
			.catch((error) => {
				dispatch(getUsersListError(error));
			});
	};
};

export const getUsersListRequest = () => ({
	type: GET_USERS_LIST_REQUEST,
});

export const getUsersListSuccess = (usersList) => ({
	type: GET_USERS_LIST_SUCCESS,
	usersList,
});

export const getUsersListError = (error) => ({
	type: GET_USERS_LIST_ERROR,
	error,
});

export const updateUsersListAction = (usersList) => ({
	type: UPDATE_USERS_LIST,
	usersList,
});

export const getGroupsListAction = () => ({
	type: GET_GROUPS_LIST,
});

export const getSelectedUserAction = (userId) => ({
	type: GET_SELECTED_USER,
	userId,
});

export const LeaveGroupAction = (userId, groupId, usersList) => ({
	type: LEAVE_GROUP,
	userId,
	groupId,
	usersList,
});

export const JoinGroupAction = (userId, groupId, usersList) => ({
	type: JOIN_GROUP,
	userId,
	groupId,
	usersList,
});

export const CreateGroupAction = (groupName) => ({
	type: CREATE_GROUP,
	groupName,
});
