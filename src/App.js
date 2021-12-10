import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui components
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// Custom components
import Navbar from './components/Navbar';
import GroupPage from './components/GroupPage';

// Redux actions
import {
	getUsersListAction,
	getGroupsListAction,
	getSelectedUserAction,
} from './redux/actions';

function Copyright() {
	return (
		<Box
			sx={{ position: 'absolute', bottom: 0, left: '50%' }}
			style={{ transform: 'translateX(-50%)' }}
		>
			<Typography
				variant='body2'
				color='text.secondary'
				align='center'
				sx={{ mb: 1 }}
			>
				{'Copyright © '}
				<Link color='inherit' href='https://www.repowrtransport.com/'>
					Repowr
				</Link>{' '}
				{new Date().getFullYear()}
				{'.'}
			</Typography>
		</Box>
	);
}

export default function App() {
	const [selectedGroup, setSelectedGroup] = useState(1);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsersListAction());
		dispatch(getGroupsListAction());
		dispatch(getSelectedUserAction(0));
	}, []);

	const { groups } = useSelector((state) => state?.groupsList);

	const changeNavGroup = (value) => {
		setSelectedGroup(value);
	};

	return (
		<>
			<Navbar changeNavGroup={changeNavGroup} />
			<Container>
				<Box>
					<GroupPage data={groups[selectedGroup]} />
				</Box>
				<Copyright />
			</Container>
		</>
	);
}
