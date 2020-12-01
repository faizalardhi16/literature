import React, { useState, useEffect } from 'react';
import { API } from '../../config/api';

import { AiFillCloseCircle } from 'react-icons/ai';

import { Row, Col, Table, Button, Dropdown } from 'react-bootstrap';

import { MdVerifiedUser } from 'react-icons/md';

import { useParams, Link } from 'react-router-dom';

import './style.css';

import 'reactjs-popup/dist/index.css';

export default function Admin() {
	const statuz = ['Approve', 'Cancel', 'Waiting For Approval'];

	let { status } = useParams();

	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);
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

	const handleApprove = async (id) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const body = JSON.stringify({ status: 'Approve' });

			const res = await API.patch(`/books/edit/${id}`, body, config);
			setBooks(res.data.data.book);
		} catch (error) {
			console.log(error);
		}
	};

	const handleCancel = async (id) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
			};

			const body = JSON.stringify({ status: 'Cancel' });

			const res = await API.patch(`/books/edit/${id}`, body, config);
			setBooks(res.data.data.book);
		} catch (error) {
			console.log(error);
		}
	};

	const handleDelete = async (id) => {
		try {
			const res = await API.delete(`/books/${id}`);
			const filterBooks = books.filter((book) => book.id != id);
			setBooks(filterBooks);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(status);
	console.log(books);

	return (
		<div style={{ background: '#000000', display: 'block' }}>
			<div style={{ paddingTop: '50px', background: '#ffffff' }}>
				<div style={{ margin: '0px auto', width: '90%' }}>
					<h1 style={{ color: '#000000' }}>Book Verification</h1>
					<Table style={{ textAlign: 'center', color: 'black' }} striped hover>
						<thead style={{ color: '#ffffff' }}>
							<tr>
								<th>ID Literature</th>
								<th>Nama</th>
								<th>ISBN</th>
								<th>Ebook</th>
								<th>
									<Dropdown>
										<Dropdown.Toggle variant="success" id="dropdown-basic">
											Dropdown Button
										</Dropdown.Toggle>

										<Dropdown.Menu>
											{statuz.map((item) => (
												<Dropdown.Item>
													<Link to={`${item}`}>{item}</Link>
												</Dropdown.Item>
											))}
										</Dropdown.Menu>
									</Dropdown>
								</th>
								<th>Action</th>
							</tr>
						</thead>
						<tbody>
							{books.map((item, index) =>
								status == item.status ? (
									<tr key={item.id}>
										<td>{item.id}</td>
										<td>{item.user.fullName}</td>
										<td>{item.isbn}</td>
										<td>{item.title}</td>
										<td>{item.status}</td>
										<td>
											<div id="action">
												{item.status == 'Cancel' ? (
													<AiFillCloseCircle
														style={{
															fontSize: 30,
															color: '#c0392b',
															background: '#c0392b',
															cursor: 'pointer',
														}}
														onClick={() => handleDelete(item.id)}
													/>
												) : item.status == 'Approve' ? (
													<MdVerifiedUser
														style={{
															fontSize: 30,
															background: 'green',
															borderRadius: '5px',
														}}
													/>
												) : (
													<Row style={{ width: 170 }}>
														<Col sm={6}>
															<Button
																variant="danger"
																onClick={() => handleCancel(item.id)}
															>
																Cancel
															</Button>
														</Col>
														<Col sm={6}>
															<Button
																variant="success"
																onClick={() => handleApprove(item.id)}
															>
																Approve
															</Button>
														</Col>
													</Row>
												)}
											</div>
										</td>
									</tr>
								) : (
									''
								)
							)}
						</tbody>
					</Table>
				</div>
			</div>
		</div>
	);
}
