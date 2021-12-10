import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

// material-ui components
import { Avatar, Box, Card, CardContent, Typography } from '@mui/material';

const bull = (
	<Box
		component='span'
		sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
	>
		•
	</Box>
);

export default function OutlinedCard({ selectedGroup }) {
	const [groupUsers, setGroupUsers] = useState([]);

	const { users } = useSelector((state) => state?.usersList);
	const { groups } = useSelector((state) => state?.groupsList);

	useEffect(() => {
		let groupUsersArray = [...users];

		if (selectedGroup !== 0) {
			groupUsersArray = groupUsersArray?.filter((i) =>
				i?.groupId?.includes(selectedGroup)
			);
		}

		setGroupUsers(groupUsersArray);
	}, [users, groups, selectedGroup]);

	return (
		<Box sx={{ minWidth: 275 }}>
			<Card variant='outlined'>
				<React.Fragment>
					<Box sx={{ padding: 2 }}>
						<Typography variant='h5' component='div' display='inline'>
							Members
						</Typography>
						<Typography
							variant='h5'
							component='div'
							display='inline'
							color='text.secondary'
						>
							{' '}
							{bull} {groupUsers?.length}
						</Typography>
					</Box>

					<CardContent>
						{groupUsers?.map((item, index) => (
							<Box
								key={index}
								display='flex'
								alignItems='center'
								justifyContent='space-between'
								sx={{ mb: 3 }}
							>
								<Box display='flex' alignItems='center'>
									<Avatar
										alt={item.firstname}
										src={item.image}
										sx={{ mr: 2 }}
									/>
									<Box>
										<Typography>
											{item.firstname + ' ' + item.lastname}
										</Typography>
										<Typography typography={{ textTransform: 'lowercase' }}>
											{item.email}
										</Typography>
										{selectedGroup === 0 &&
											item?.groupId?.map((groupId, index) => (
												<React.Fragment key={index}>
													<Typography
														display='inline-block'
														typography={{ textTransform: 'capitalize' }}
													>
														{index > 0 && ', '}
														{groups[groupId]?.name}
													</Typography>
												</React.Fragment>
											))}
									</Box>
								</Box>
							</Box>
						))}
					</CardContent>
				</React.Fragment>
			</Card>
		</Box>
	);
}
