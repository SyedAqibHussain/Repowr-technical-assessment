import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// material-ui components
import { Typography, Box, Button, Modal, TextField } from '@mui/material';

// Redux actions
import { CreateGroupAction } from '../redux/actions';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

const CustomModal = ({ open, handleClose }) => {
	const [groupName, setGroupName] = useState('');
	const dispatch = useDispatch();

	const handleSubmit = (e) => {
		e.preventDefault();

		dispatch(CreateGroupAction(groupName));
		setGroupName('');
		handleClose();
	};

	return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby='modal-modal-title'
			aria-describedby='modal-modal-description'
		>
			<Box sx={style}>
				<Typography
					id='modal-modal-title'
					variant='h6'
					component='h2'
					sx={{ mb: 2 }}
				>
					Create new group
				</Typography>
				<Box
					component='form'
					noValidate
					autoComplete='off'
					onSubmit={handleSubmit}
				>
					<TextField
						required
						id='outlined-required'
						label='Group name'
						placeholder='Enter group name'
						value={groupName}
						onChange={(e) => setGroupName(e.target.value)}
						sx={{ width: '100%', mb: 2 }}
					/>
					<Button type='submit' sx={{ width: '100%' }}>
						Submit
					</Button>
				</Box>
			</Box>
		</Modal>
	);
};

export default CustomModal;
