import { combineReducers } from 'redux';

import { usersListReducer, selectedUserReducer } from './users';
import { groupsListReducer } from './groups';

const reducers = combineReducers({
	usersList: usersListReducer,
	groupsList: groupsListReducer,
	selectedUser: selectedUserReducer,
});

export default reducers;
