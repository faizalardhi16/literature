import React, { useState, useContext, useEffect } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { API } from '../../config/api';
//import css
import '../Style/style.css';

//import images
import { UserContext } from '../../context/UserContext';

import { BsTrash, BsPencilSquare } from 'react-icons/bs';

export default function Fetches(props) {
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
		<div className="card" style={{ width: '12.5rem', border: 'none' }}>
			<Card.Img
				style={{ borderRadius: '5px' }}
				className="imegs"
				variant="top"
				src={`${props.images}`}
			/>
			<Card.Body style={{ background: '#000000' }}>
				<Card.Title
					style={{
						position: 'relative',
						left: -20,
						fontStyle: 'bold',
						fontFamily: 'classic',
						fontWeight: 800,
					}}
				>
					{props.title}
				</Card.Title>

				<Card.Text
					style={{ position: 'relative', left: -20, color: '#ffffff' }}
				>
					{props.fullName}
				</Card.Text>

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
						onClick={() => deleteThis(props.id)}
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
	);
}
