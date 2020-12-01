import React, { useState, useEffect, useContext } from 'react';
import { API } from '../../config/api';
import { Col, Row, Modal } from 'react-bootstrap';

import './style.css';
import { useParams, Link } from 'react-router-dom';

import { BsBookmark } from 'react-icons/bs';

import { UserContext } from '../../context/UserContext';

function MyVerticallyCenteredModal(props) {
	return (
		<Modal
			{...props}
			size="lg"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Body>
				<p style={{ padding: 20, color: 'green' }}>
					Your book has been added successfully
				</p>
			</Modal.Body>
		</Modal>
	);
}

export default function Detail() {
	const [modalShow, setModalShow] = React.useState(false);
	let { id } = useParams();

	const [state, dispatch] = useContext(UserContext);

	const [bookmark, setBookmark] = useState([]);
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);

	const [userId, setUser] = useState({
		userId: state.user.id,
	});

	useEffect(() => {
		const loadBooks = async () => {
			try {
				setLoading(true);
				const res = await API.get('/books');
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
		const loadBookmark = async () => {
			try {
				setLoading(true);
				const res = await API.get(`/collection/${state.user.id}`);
				setBookmark(res.data.data);
				setLoading(false);
			} catch (error) {
				setLoading(false);
				console.log(error);
			}
		};

		loadBookmark();
	}, []);

	console.log(bookmark);

	const handleTest = async (e) => {
		e.preventDefault(e);

		try {
			console.log(id);
			console.log(userId);

			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const body = JSON.stringify(userId);
			const res = await API.post(`/collection/${id}`, body, config);
			setModalShow(true);
			console.log(res.data.data.message);
			setBookmark([...bookmark, res.data.data.collect]);

			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div
			style={{
				paddingTop: 30,
				margin: '0px auto',
				width: '90%',
			}}
		>
			<div className="detil">
				<Row>
					<Col sm={5}>
						{books.map((item) => (
							<div key={item.id}>
								{item.id == id ? (
									<img
										className="img"
										width={400}
										src={`${item.images}`}
										alt="gambar"
									/>
								) : (
									''
								)}
							</div>
						))}
					</Col>

					<Col sm={7} style={{ textAlign: 'justify' }}>
						{books.map((item) => (
							<div key={item.id}>
								{item.id == id ? (
									<ul className="list-order" style={{ listStyleType: 'none' }}>
										<Row>
											<Col sm={8}>
												<li>
													<div
														style={{
															display: 'flex',
															alignItems: 'center',
															marginBottom: '-5%',
														}}
													>
														<h2
															style={{
																fontWeight: 800,
																fontStyle: 'bold',
																textAlign: 'left',
																fontFamily: 'classic',
																paddingRight: 20,
															}}
														>
															{item.title}
														</h2>
													</div>
													<br />
													<span className="muted">{item.author}</span>
												</li>

												<li>
													<h4 style={{ fontWeight: 700, fontStyle: 'bold' }}>
														Publication Date
													</h4>
													<span className="muted">{item.category.name}</span>
												</li>

												<li>
													<h4 style={{ fontWeight: 700, fontStyle: 'bold' }}>
														Pages
													</h4>
													<span className="muted">{item.pages}</span>
												</li>

												<li>
													<h4
														style={{
															fontWeight: 700,
															fontStyle: 'bold',
															color: '#EE4622',
														}}
													>
														ISBN
													</h4>
													<span className="muted">{item.isbn}</span>
												</li>

												<li>
													<a
														href={`http://localhost:5000/files/${item.file}`}
														target="_blank"
														download
														className="btnL download"
														style={{
															padding: 15,
														}}
													>
														{' '}
														Download{' '}
													</a>
												</li>
											</Col>

											<Col sm={4} style={{ marginTop: '-8%' }}>
												<div className="button">
													<button
														className="btnL"
														onClick={(e) => handleTest(e)}
													>
														Add Library <BsBookmark style={{ fontSize: 20 }} />
													</button>

													<MyVerticallyCenteredModal
														show={modalShow}
														onHide={() => setModalShow(false)}
													/>
												</div>
											</Col>
										</Row>
									</ul>
								) : (
									''
								)}
							</div>
						))}
					</Col>
				</Row>
			</div>
		</div>
	);
}
