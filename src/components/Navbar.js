import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// material-ui components
import {
	AppBar,
	Box,
	Toolbar,
	IconButton,
	Typography,
	Menu,
	Container,
	Button,
	MenuItem,
	Avatar,
} from '@mui/material';

// material-ui icons
import MenuIcon from '@mui/icons-material/Menu';

// Redux actions
import { getSelectedUserAction } from '../redux/actions';

const Navbar = ({ changeNavGroup }) => {
	const [anchorElNav, setAnchorElNav] = useState(null);
	const [anchorElUser, setAnchorElUser] = useState(null);

	const { users } = useSelector((state) => state?.usersList);
	const { groups } = useSelector((state) => state?.groupsList);
	const { selectedUser } = useSelector((state) => state?.selectedUser);
	const dispatch = useDispatch();

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event) => {
		setAnchorElUser(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	const handleUserClick = (userId) => {
		dispatch(getSelectedUserAction(userId));
		setAnchorElUser(false);
	};

	return (
		<AppBar position='static'>
			<Container maxWidth='xl'>
				<Toolbar disableGutters>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
					>
						REPOWR
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
						<IconButton
							size='large'
							aria-label='account of current user'
							aria-controls='menu-appbar'
							aria-haspopup='true'
							onClick={handleOpenNavMenu}
							color='inherit'
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id='menu-appbar'
							anchorEl={anchorElNav}
							anchorOrigin={{
								vertical: 'bottom',
								horizontal: 'left',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'left',
							}}
							open={Boolean(anchorElNav)}
							onClose={handleCloseNavMenu}
							sx={{
								display: { xs: 'block', md: 'none' },
							}}
						>
							{groups?.map((item, index) => (
								<MenuItem key={index} onClick={() => changeNavGroup(index)}>
									<Typography textAlign='center'>{item?.name}</Typography>
								</MenuItem>
							))}
						</Menu>
					</Box>
					<Typography
						variant='h6'
						noWrap
						component='div'
						sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
					>
						REPOWR
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
						{groups?.map((item, index) => (
							<Button
								key={index}
								onClick={() => changeNavGroup(index)}
								sx={{ my: 2, color: 'white', display: 'block' }}
							>
								{item?.name}
							</Button>
						))}
					</Box>

					<Box display='flex' sx={{ flexGrow: 0 }}>
						<Button
							onClick={handleOpenUserMenu}
							sx={{ p: 0, color: '#fff', mr: 3 }}
						>
							Switch user
						</Button>
						<Box display='flex' alignItems='center'>
							<Avatar
								alt={users[selectedUser]?.firstname}
								src={users[selectedUser]?.image}
								sx={{ mr: 1 }}
							/>
							<Box>
								<Typography>
									{users[selectedUser]?.firstname +
										' ' +
										users[selectedUser]?.lastname}
								</Typography>
							</Box>
						</Box>
						<Menu
							sx={{ mt: '45px' }}
							id='menu-appbar'
							anchorEl={anchorElUser}
							anchorOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							keepMounted
							transformOrigin={{
								vertical: 'top',
								horizontal: 'right',
							}}
							open={Boolean(anchorElUser)}
							onClose={handleCloseUserMenu}
						>
							{users.map(
								(item, index) =>
									item?.id !== selectedUser && (
										<MenuItem
											onClick={() => handleUserClick(item?.id)}
											key={index}
										>
											<Typography textAlign='center'>
												{item.firstname + ' ' + item.lastname}
											</Typography>
										</MenuItem>
									)
							)}
						</Menu>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};
export default Navbar;
