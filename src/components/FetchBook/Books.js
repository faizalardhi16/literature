import React, { useContext, useEffect, useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';

import { API } from '../../config/api';
//import css
import '../Style/style.css';

//import images
import { UserContext } from '../../context/UserContext';

import { BsTrash, BsPencilSquare } from 'react-icons/bs';

export default function Books() {
	const [state] = useContext(UserContext);
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);

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

	const deleteThis = async (id) => {
		try {
			const res = await API.delete(`/books/${id}`);
			const filterBooks = books.filter((book) => book.id != id);
			setBooks(filterBooks);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div>
			<div className="maBook">
				<Row>
					{books.map((item) =>
						item.user.id === state.user.id &&
						item.status === 'Approve' &&
						loading === false ? (
							<Col
								sm={3}
								className="isi"
								style={{
									display: 'flex',
									flexDirection: 'row',
									marginBottom: 50,
									marginTop: 50,
								}}
							>
								<div className="post">
									<Card.Img
										style={{
											maxWidth: '250px',
										}}
										src={
											'http://localhost:5000/imagess/1603764942366-Rectangle 9 (8).png'
										}
									/>
									<Card.Body
										style={{
											position: 'relative',
											left: '-7%',
										}}
									>
										<Card.Title>
											{item.title.length >= 15
												? item.title.substring(0, 15) + '...'
												: item.title}
										</Card.Title>
										<Card.Text>{item.author}</Card.Text>

										<div
											style={{
												display: 'flex',
												justifyContent: 'space-between',
											}}
										>
											<button
												style={{
													background: '#d63031',
													border: 'none',
													padding: 15,
													marginRight: 15,
												}}
												onClick={() => deleteThis(item.id)}
											>
												<BsTrash />
											</button>

											<button
												style={{
													background: '#00b894',
													border: 'none',
													padding: 15,
												}}
											>
												<BsPencilSquare />
											</button>
										</div>
									</Card.Body>
								</div>
							</Col>
						) : item.user.id === state.user.id &&
						  item.status === 'Waiting For Approval' &&
						  loading === false ? (
							<Col
								sm={3}
								className="isi"
								style={{
									display: 'flex',
									flexDirection: 'row',
									marginBottom: 50,
									marginTop: 50,
									opacity: '0.5',
								}}
							>
								<div className="post">
									<Card.Img
										style={{ maxWidth: '250px', height: '300px' }}
										variant="top"
										src={`${item.images}`}
									/>
									<Card.Body
										style={{
											position: 'relative',
											left: '-7%',
										}}
									>
										<Card.Title>
											{item.title.length >= 15
												? item.title.substring(0, 15) + '...'
												: item.title}
										</Card.Title>
										<Card.Text>{item.user.fullName}</Card.Text>

										<div
											style={{
												display: 'flex',
												justifyContent: 'space-between',
											}}
										>
											<button
												style={{
													background: '#d63031',
													border: 'none',
													padding: 15,
													marginRight: 15,
												}}
												onClick={() => deleteThis(item.id)}
											>
												<BsTrash />
											</button>

											<button
												style={{
													background: '#00b894',
													border: 'none',
													padding: 15,
												}}
											>
												<BsPencilSquare />
											</button>
										</div>
									</Card.Body>
								</div>
							</Col>
						) : (
							''
						)
					)}
				</Row>
			</div>
		</div>
	);
}
