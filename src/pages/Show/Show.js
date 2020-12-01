import React, { useState, useContext, useEffect } from 'react';
import Search from '../../components/Search';
import { UserContext } from '../../context/UserContext';
import { API } from '../../config/api';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	useParams,
	Link,
} from 'react-router-dom';
import { Row, Col, Dropdown, Button, Form } from 'react-bootstrap';
import './style.css';
import { FiSearch } from 'react-icons/fi';

function Ngeroute() {
	return (
		<Router>
			<Switch>
				<Route exact path="/literature/show/:category">
					<Show />
				</Route>
			</Switch>
		</Router>
	);
}

export default function Show() {
	const { category } = useParams();
	const [loading, setLoading] = useState(false);
	const [books, setBooks] = useState([]);
	const [state, dispatch] = useContext(UserContext);
	const [cat, setCategory] = useState([]);
	const [search, setSearch] = useState('');

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	useEffect(() => {
		const loadCategory = async () => {
			try {
				setLoading(true);
				const res = await API.get('/categories');
				setCategory(res.data.data.categories);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		};

		loadCategory();
	}, []);

	const handleSearch = async (e) => {
		e.preventDefault(e);
		if (search == '') {
			console.log('');
		} else {
			try {
				setLoading(true);
				const res = await API.get(`/literature?title=${search}`);
				setBooks(res.data.data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		}
	};

	console.log(books);
	return (
		<div style={{ width: '100%', margin: '0px auto' }}>
			<div style={{ margin: '0px auto', width: '95%' }}>
				<Form
					style={{
						width: '700px',
					}}
				>
					<Form.Row className="align-items-center">
						<Col
							style={{
								width: '100%',
								marginLeft: '50px',
							}}
							md={10}
						>
							<Form.Group>
								<input
									id="searchbox"
									type="search"
									placeholder="Search For Literature"
									name="search"
									value={search}
									onChange={(e) => handleChange(e)}
									style={{
										width: '100%',
										background: 'rgba(210, 210, 210, 0.25)',
										color: '#FFFFFF',
										padding: '10px',
										borderRadius: '5px',
										height: '7.5vh',
										border: '2px solid #BCBCBC',
									}}
									required
								/>
							</Form.Group>
						</Col>

						<Col xs="auto">
							<Form.Group>
								<button
									className="buttond"
									style={{
										background: '#AF2E1C',
										color: '#ff4f00',
										border: 'none',
										padding: '10px',
										height: '7.5vh',
										width: '50px',
										borderRadius: '0px',
									}}
									onClick={(e) => handleSearch(e)}
								>
									<FiSearch
										style={{
											color: '#ff4f00',
											marginBottom: '5px',
										}}
									/>
								</button>
							</Form.Group>
						</Col>
					</Form.Row>
				</Form>
			</div>

			<Row
				style={{
					margin: '0px auto',
					width: '90%',
					marginTop: 40,
				}}
			>
				<Col sm={2}>
					<a className="linkz" href="/home">
						Anytime
					</a>
					<Dropdown className="mt-3">
						<Dropdown.Toggle
							style={{
								background: 'rgba(210, 210, 210, 0.25)',
								border: '2px solid #BCBCBC',
								color: 'white',
							}}
							id="dropdown-basic"
						>
							Publication Years
						</Dropdown.Toggle>

						<Dropdown.Menu>
							{cat.map((item) => (
								<div key={item.id}>
									<Dropdown.Item>
										<Link className="Links" to={`/literature/show/${item.id}`}>
											{item.name}
										</Link>
									</Dropdown.Item>
								</div>
							))}
						</Dropdown.Menu>
					</Dropdown>
				</Col>

				<Col sm={10}>
					<Row>
						{books.map((item) => (
							<div key={item.id}>
								{item.status === 'Approve' && category === 'all' ? (
									<Col sm={2.5}>
										<Link
											className="Links"
											to={`/literature/detail/${item.id}`}
										>
											<div
												style={{
													display: 'flex',
													flexDirection: 'column',
													marginBottom: '20px',
													marginRight: '50px',
												}}
											>
												<div>
													<img src={`${item.images}`} />
												</div>
												<div
													style={{
														width: '200px',
													}}
												>
													<p style={{ textAlign: 'center' }}>{item.title}</p>
													<p style={{ textAlign: 'center' }}>
														{item.user.fullName}
													</p>
												</div>
											</div>
										</Link>
									</Col>
								) : item.categoryid === category ? (
									<Col sm={2.5}>
										<Link
											className="Links"
											to={`/literature/detail/${item.id}`}
										>
											<div
												style={{
													display: 'flex',
													flexDirection: 'column',
													marginBottom: '20px',
													marginRight: '50px',
												}}
											>
												<div>
													<img src={`${item.images}`} />
												</div>
												<div
													style={{
														width: '200px',
													}}
												>
													<p style={{ textAlign: 'center' }}>{item.title}</p>
													<p style={{ textAlign: 'center' }}>
														{item.user.fullName}
													</p>
												</div>
											</div>
										</Link>
									</Col>
								) : (
									''
								)}
							</div>
						))}

						<div id="warn"></div>
					</Row>
				</Col>
			</Row>
		</div>
	);
}
