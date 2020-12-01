import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Button, Modal, Form } from 'react-bootstrap';

import { API } from '../../config/api';
//import css
import '../../components/Style/style.css';

//import images

import { UserContext } from '../../context/UserContext';

//import icon
import { MdEmail } from 'react-icons/md';
import { FaTransgender } from 'react-icons/fa';
import { HiPhone } from 'react-icons/hi';
import { ImLocation } from 'react-icons/im';

import Books from '../../components/FetchBook/Books';

export default function Profile() {
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	const [state, dispatch] = useContext(UserContext);
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [photo, setPhoto] = useState(null);

	useEffect(() => {
		const loadBooks = async () => {
			try {
				setLoading(true);
				const res = await API.get(`/books`);
				setBooks(res.data.data.book);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		};

		loadBooks();
	}, []);

	useEffect(() => {
		const loadUsers = async () => {
			try {
				setLoading(true);
				const res = await API.get(`/users`);
				setUsers(res.data.data.Users);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		};

		loadUsers();
	}, []);

	const handleChange = (e) => {
		setPhoto(e.target.files[0]);
	};

	const handleUpdate = async (id, e) => {
		try {
			e.preventDefault(e);
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};

			const body = new FormData();
			body.append('file', photo);

			const res = await API.patch(`/user/edit/${id}`, body, config);
			console.log(res.data.message);
			setUsers(res.data.data);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(users);
	console.log(books);

	return (
		<div
			style={{
				margin: '0px auto',
				paddingTop: '1%',
				width: '90%',
				paddingBottom: '20vh',
			}}
		>
			<h1
				style={{ fontFamily: 'classic', fontWeight: 'bold' }}
				className="mb-3"
			>
				Profile
			</h1>

			<div className="jumbotrons">
				{users.map((items) => (
					<div key={items.id}>
						{items.id === (state.user ? state.user.id : ' ') ? (
							<Row>
								<Col md={6}>
									<Row style={{ marginBottom: 10 }}>
										<Col sm={2} style={{ marginRight: -15 }}>
											<MdEmail style={{ fontSize: 50, color: '#8A8C90' }} />
										</Col>

										<Col sm={10} style={{ textAlign: 'justify', fontSize: 20 }}>
											<p style={{ marginBottom: -2, fontStyle: 'bold' }}>
												{state.user ? state.user.email : ''}
											</p>
											<p style={{ color: '#8A8C90' }}>Email</p>
										</Col>
									</Row>

									<Row style={{ marginBottom: 10 }}>
										<Col sm={2} style={{ marginRight: -15 }}>
											<FaTransgender
												style={{ fontSize: 50, color: '#8A8C90' }}
											/>
										</Col>

										<Col sm={10} style={{ textAlign: 'justify', fontSize: 20 }}>
											<p style={{ marginBottom: -2, fontStyle: 'bold' }}>
												{state.user ? state.user.gender : ''}
											</p>
											<p style={{ color: '#8A8C90' }}>Gender</p>
										</Col>
									</Row>

									<Row style={{ marginBottom: 10 }}>
										<Col sm={2} style={{ marginRight: -15 }}>
											<HiPhone style={{ fontSize: 50, color: '#8A8C90' }} />
										</Col>

										<Col sm={10} style={{ textAlign: 'justify', fontSize: 20 }}>
											<p style={{ marginBottom: -2, fontStyle: 'bold' }}>
												{state.user ? state.user.phone : ''}
											</p>
											<p style={{ color: '#8A8C90' }}>Mobile Phone</p>
										</Col>
									</Row>

									<Row style={{ marginBottom: 10 }}>
										<Col sm={2} style={{ marginRight: -15 }}>
											<ImLocation style={{ fontSize: 50, color: '#8A8C90' }} />
										</Col>

										<Col sm={10} style={{ textAlign: 'left', fontSize: 20 }}>
											<p style={{ marginBottom: -2, fontStyle: 'bold' }}>
												{state.user ? state.user.address : ''}
											</p>
											<p style={{ color: '#8A8C90' }}>Address</p>
										</Col>
									</Row>
								</Col>

								<Col md={6} style={{ paddingLeft: '27%' }}>
									<img
										style={{ height: 250 }}
										width={250}
										src={`http://localhost:5000/imagess/${items.file}`}
										alt="Logo"
									/>
									<br />

									<Button
										style={{
											marginTop: 20,
											background: '#AF2E1C',
											border: 'none',
											width: 250,
											paddingLeft: 50,
											paddingRight: 50,
											paddingTop: 20,
											paddingBottom: 20,
										}}
										onClick={handleShow}
									>
										Chage Photo Profile
									</Button>

									<Modal show={show} onHide={handleClose}>
										<Modal.Body
											style={{
												margin: '0px auto',
												width: '90%',
											}}
										>
											<Form onSubmit={(e) => handleUpdate(state.user.id, e)}>
												<input
													style={{ color: 'black' }}
													type="file"
													name="file"
													id="file"
													accept="image/*"
													onChange={(e) => handleChange(e)}
												/>

												<Button
													variant="primary"
													type="submit"
													onClick={handleClose}
												>
													Submit
												</Button>
											</Form>
										</Modal.Body>
									</Modal>
								</Col>
							</Row>
						) : (
							''
						)}
					</div>
				))}
			</div>

			<div className="order">
				<h1 style={{ textAlign: 'left' }}>List Literature</h1>
			</div>

			<Books />
		</div>
	);
}
