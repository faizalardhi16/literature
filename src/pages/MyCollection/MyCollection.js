import React, { useState, useEffect, useContext } from 'react';
import { API } from '../../config/api';
import { Col, Row, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../components/Style/style.css';
import Fetching from '../../components/FetchBook/Fetching';
import { UserContext } from '../../context/UserContext';

//import images

import Detail from '../Details/Details';

function Detailing() {
	return (
		<Router>
			<Switch>
				<Route exact path="/member/detail/:id">
					<Detail />
				</Route>

				<Route exact path="/member/mylibrary">
					<MyLibrary />
				</Route>
			</Switch>
		</Router>
	);
}

export default function MyLibrary() {
	const [bookmark, setBookmark] = useState([]);
	const [loading, setLoading] = useState(false);
	const [state, dispatch] = useContext(UserContext);

	useEffect(() => {
		const loadBooks = async () => {
			try {
				setLoading(true);
				const res = await API.get(`/collection/${state.user.id}`);
				setBookmark(res.data.data.collectionz);
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
			const res = await API.delete(`/collection/${id}`);
			const filterBooks = bookmark.filter((book) => book.id != id);
			setBookmark(filterBooks);
		} catch (error) {
			console.log(error);
		}
	};

	console.log(bookmark);

	return (
		<div
			style={{
				margin: '0px auto',
				paddingTop: '1%',
				width: '90%',
				paddingBottom: '65vh',
			}}
		>
			<div className="order">
				<h1
					style={{
						textAlign: 'left',
						fontFamily: 'classic',
						fontWeight: 'bold',
					}}
				>
					My Collection
				</h1>
			</div>

			<div className="book-list">
				<Row>
					{loading || !bookmark ? (
						<h2>Loading..</h2>
					) : (
						bookmark.map((item) => (
							<div key={item.id}>
								<Col sm={2} style={{ marginBottom: 20 }}>
									<Fetching
										id={`${item.booksId}`}
										images={`${item.books.images}`}
										title={`${item.books.title}`}
									/>
									<Button variant="danger" onClick={() => deleteThis(item.id)}>
										Delete
									</Button>
								</Col>
							</div>
						))
					)}
				</Row>
			</div>
		</div>
	);
}
