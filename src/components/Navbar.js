import React, { useContext } from 'react';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useParams,
} from 'react-router-dom';

import { UserContext } from '../context/UserContext';
import { Navbar, Nav, NavDropdown, Form } from 'react-bootstrap';

import logo from './images/logoz.png';

import Profile from '../pages/Profile/Profile';
import MyLibrary from '../pages/MyCollection/MyCollection';
import Details from '../pages/Details/Details';
import Addbook from '../pages/AddBooks/Addbook';
import Home from '../pages/Home/Home';
import Show from '../pages/Show/Show';
import Admin from '../pages/Admin/Admin';

import './Style/style.css';

export default function NestingExample() {
	const { id } = useParams();
	return (
		<Router>
			<div className="containers">
				<Switch>
					<Route exact path={`/home`}>
						<Navigate />
						<Home />
					</Route>

					<Route exact path={`/literature/detail/:id`}>
						<Navigate />
						<Details />
					</Route>

					<Route exact path="/profile">
						<Navigate />
						<Profile />
					</Route>

					<Route exact path="/mycollection">
						<Navigate />
						<MyLibrary />
					</Route>

					<Route exact path={`/literature/detail/:id`}>
						<Navigate />
						<Details />
					</Route>

					<Route exact path={`/post`}>
						<Navigate />
						<Addbook />
					</Route>

					<Route exact path={`/literature/show/:category`}>
						<Navigate />
						<Show />
					</Route>

					<Route exact path={`/admin/table/all`}>
						<AdNav />
						<Admin />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

function AdNav() {
	return (
		<Navbar expand="lg" style={{ margin: '0px auto', width: '90%' }}>
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#home">
						<img width={150} src={logo} alt="logo" />
					</Nav.Link>
					<Nav.Link href="#link"></Nav.Link>
				</Nav>
				<NavDropdown
					style={{ color: 'white' }}
					title="Menu"
					id="basic-nav-dropdown"
				>
					<NavDropdown.Item>
						<Link to="/post">Add Book</Link>
					</NavDropdown.Item>
					<NavDropdown.Divider />
					<NavDropdown.Item>
						<Link to="/home">Back To Home</Link>
					</NavDropdown.Item>
				</NavDropdown>
			</Navbar.Collapse>
		</Navbar>
	);
}

function Navigate() {
	const [state, dispatch] = useContext(UserContext);
	return (
		<div style={{ background: 'black', width: '90%', margin: '0px auto' }}>
			<Navbar style={{ background: '#000000' }} variant="dark">
				<Nav className="mr-auto" style={{ color: 'white' }}>
					<Link
						style={{
							paddingRight: 20,
							textDecoration: 'none',
							color: '#FFFFFF',
						}}
						to="/profile"
					>
						{' '}
						<p>Profile</p>{' '}
					</Link>
					<Link
						style={{
							paddingRight: 20,
							textDecoration: 'none',
							color: '#FFFFFF',
						}}
						to="/mycollection"
					>
						My Collection
					</Link>
					<Link
						style={{
							paddingRight: 20,
							textDecoration: 'none',
							color: '#FFFFFF',
						}}
						to="/post"
					>
						Add Literature
					</Link>

					{state.user ? (
						state.user.isadmin === true ? (
							<Link
								style={{
									paddingRight: 20,
									textDecoration: 'none',
									color: '#FFFFFF',
								}}
								to="/admin/table"
							>
								Dashboard
							</Link>
						) : (
							''
						)
					) : (
						''
					)}

					<Link
						style={{
							paddingRight: 20,
							textDecoration: 'none',
							color: '#FFFFFF',
						}}
						to="/"
						onClick={() =>
							dispatch({
								type: 'LOGOUT',
							})
						}
					>
						Logout
					</Link>
				</Nav>
				<Form inline>
					<Link to="/home">
						<img src={logo} />
					</Link>
				</Form>
			</Navbar>
		</div>
	);
}
