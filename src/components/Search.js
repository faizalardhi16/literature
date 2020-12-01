import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { API } from '../config/api';
import Land from './images/v.png';
import { Form, InputGroup, Col, Button, FormControl } from 'react-bootstrap';
import './stylez.css';

export default function Search() {
	const history = useHistory();
	const [search, setSearch] = useState('');

	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		setSearch(e.target.value);
	};

	const handleSearch = async (e) => {
		e.preventDefault(e);

		try {
			setLoading(true);
			const res = await API.get(`/literature?title=${search}`);
			setBooks(res.data.data);
			setLoading(false);
			history.push('/literature/show/all');
		} catch (error) {
			setLoading(false);
			console.log(error);
		}
	};

	console.log(books);
	console.log(search);
	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column',
				marginTop: '20px',
			}}
		>
			<img style={{ marginLeft: '5%', marginBottom: '3%' }} src={Land} />

			<Form
				style={{
					width: '700px',
				}}
			>
				<Form.Row
					style={{
						width: '100%',
					}}
					className="align-items-center"
				>
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
								style={{
									width: '100%',
									background: 'rgba(210, 210, 210, 0.25)',
									color: '#FFFFFF',
									padding: '10px',
									borderRadius: '5px',
									height: '7.5vh',
									border: '2px solid #BCBCBC',
								}}
							/>
						</Form.Group>
					</Col>

					<Col xs="auto">
						<Form.Group>
							<Button
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
							</Button>
						</Form.Group>
					</Col>
				</Form.Row>
			</Form>
		</div>
	);
}
