import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui components
import { Typography, Box, Button } from '@mui/material';

// Custom components
import OutlinedCard from './Card';
import CustomModal from './Modal';

// Redux actions
import { LeaveGroupAction, JoinGroupAction } from '../redux/actions';

const GroupPage = ({ data }) => {
	const [open, setOpen] = useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const dispatch = useDispatch();

	const { users } = useSelector((state) => state?.usersList);
	const { groups } = useSelector((state) => state?.groupsList);

	const { selectedUser } = useSelector((state) => state?.selectedUser);

	const handleLeaveGroup = (userId, groupId) => {
		dispatch(LeaveGroupAction(userId, groupId, users));
	};

	const handleJoinGroup = (userId, groupId) => {
		dispatch(JoinGroupAction(userId, groupId, users));
	};

	return (
		<Box>
			<Box display='flex' alignItems='center' justifyContent='space-between'>
				<Typography
					variant='h4'
					typography={{ textTransform: 'capitalize' }}
					sx={{ my: 3 }}
				>
					{data?.name}
				</Typography>
				<Box>
					<Button variant='contained' onClick={handleOpen} sx={{ mr: 2 }}>
						Create New Group
					</Button>
					{data?.id !== 0 &&
						(users[selectedUser]?.groupId?.includes(data?.id) ? (
							<Button onClick={() => handleLeaveGroup(selectedUser, data?.id)}>
								Leave Group
							</Button>
						) : (
							<Button onClick={() => handleJoinGroup(selectedUser, data?.id)}>
								Join Group
							</Button>
						))}
				</Box>
			</Box>

			<OutlinedCard selectedGroup={data?.id} />
			<CustomModal open={open} handleClose={handleClose} />
		</Box>
	);
};

export default GroupPage;
