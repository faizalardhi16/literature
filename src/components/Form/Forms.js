import React, { useState, useContext, useEffect } from 'react';

import { Form } from 'react-bootstrap';

import { BsPaperclip } from 'react-icons/bs';
import { UserContext } from '../../context/UserContext';
import { API } from '../../config/api';

import '../../pages/AddBooks/style.css';
import { Modal } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

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
					Thank you for adding your own books to our website, please wait 1 x 24
					hours to verify whether this book is your writing
				</p>
			</Modal.Body>
		</Modal>
	);
}

export default function Forms() {
	const [modalShow, setModalShow] = React.useState(false);
	const [state, dispatch] = useContext(UserContext);
	const [show, setShow] = useState(false);
	const [loading, setLoading] = useState(false);
	const [bookz, setBooks] = useState([]);
	const [category, setCategory] = useState([]);
	const history = useHistory();

	const [formData, setFormData] = useState({
		title: '',
		publication: '',
		categoryId: '',
		isbn: '',
		author: '',
		file: null,
		images:
			'http://uploader.nusaserver.com/server/php/files/Rectangle%209%20%289%29.png',
		about: '',
		pages: '',
		status: state.user.isadmin ? 'Approve' : 'Waiting For Approval',
		userId: state.user.id,
	});

	const {
		title,
		publication,
		images,
		categoryId,
		pages,
		isbn,
		about,
		author,
		file,
		status,
		userId,
	} = formData;

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

	console.log(bookz);
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

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	const handleChange = (e) => {
		e.target.type == 'file'
			? setFormData({ ...formData, [e.target.name]: e.target.files[0] })
			: setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleStore = async (e) => {
		e.preventDefault(e);

		try {
			const config = {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			};

			const form = new FormData();

			form.append('title', title);
			form.append('userId', userId);
			form.append('publication', publication);
			form.append('categoryId', categoryId);
			form.append('images', images);
			form.append('file', file);
			form.append('author', author);
			form.append('about', about);
			form.append('status', status);
			form.append('isbn', isbn);
			form.append('pages', pages);

			const res = await API.post('/books/post', form, config);

			setBooks([...bookz, res.data.data]);
			setFormData({
				title: '',
				publication: '',
				categoryId: '',
				isbn: '',
				file: null,
				images:
					'http://uploader.nusaserver.com/server/php/files/Rectangle%209%20%289%29.png',
				about: '',
				author: '',
				pages: '',
				status: 'Waiting For Approval',
				userId: state.user.id,
			});
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div style={{ margin: '0px auto', width: '90%' }}>
			<h1
				style={{
					fontFamily: 'classic',
					textAlign: 'left',
					marginTop: 20,
					fontStyle: 'bold',
					fontWeight: 800,
					marginBottom: 60,
				}}
			>
				Add Literature
			</h1>

			<Form onSubmit={(e) => handleStore(e)}>
				<Form.Group controlId="exampleForm.ControlInput1">
					<input
						value={title}
						name="title"
						onChange={(e) => handleChange(e)}
						style={{
							marginBottom: 30,
							width: '100%',
							background: 'rgba(210, 210, 210, 0.25)',
							color: '#FFFFFF',
							padding: '10px',
							borderRadius: '5px',
							height: '7.5vh',
							fontSize: '1.3rem',
							border: '2px solid #BCBCBC',
						}}
						size="lg"
						type="text"
						placeholder="Title"
					/>
				</Form.Group>

				<Form.Group controlId="exampleForm.ControlSelect1">
					<Form.Control
						as="select"
						style={{
							marginBottom: 30,
							width: '100%',
							background: 'rgba(210, 210, 210, 0.25)',
							color: '#FFFFFF',
							padding: '10px',
							fontSize: '1.3rem',
							borderRadius: '5px',
							height: '7.5vh',
							border: '2px solid #BCBCBC',
						}}
						value={categoryId}
						name="categoryId"
						onChange={(e) => handleChange(e)}
						size="lg"
						type="text"
						placeholder="Category"
					>
						{category.map((item) => (
							<option
								style={{
									background: '#2d3436',
								}}
								value={`${item.id}`}
							>
								{item.name}
							</option>
						))}
					</Form.Control>
				</Form.Group>

				<Form.Group controlId="formBasicText">
					<input
						style={{
							marginBottom: 30,
							width: '100%',
							background: 'rgba(210, 210, 210, 0.25)',
							color: '#FFFFFF',
							padding: '10px',
							fontSize: '1.3rem',
							borderRadius: '5px',
							height: '7.5vh',
							border: '2px solid #BCBCBC',
						}}
						value={pages}
						name="pages"
						onChange={(e) => handleChange(e)}
						size="lg"
						type="text"
						placeholder="Pages"
					/>
				</Form.Group>

				<Form.Group controlId="formBasicText">
					<input
						style={{
							marginBottom: 30,
							width: '100%',
							background: 'rgba(210, 210, 210, 0.25)',
							color: '#FFFFFF',
							padding: '10px',
							fontSize: '1.3rem',
							borderRadius: '5px',
							height: '7.5vh',
							border: '2px solid #BCBCBC',
						}}
						value={isbn}
						name="isbn"
						onChange={(e) => handleChange(e)}
						size="lg"
						type="text"
						placeholder="ISBN"
					/>
				</Form.Group>

				<Form.Group controlId="formBasicText">
					<input
						style={{
							marginBottom: 30,
							width: '100%',
							background: 'rgba(210, 210, 210, 0.25)',
							color: '#FFFFFF',
							padding: '10px',
							fontSize: '1.3rem',
							borderRadius: '5px',
							height: '7.5vh',
							border: '2px solid #BCBCBC',
						}}
						value={author}
						name="author"
						onChange={(e) => handleChange(e)}
						size="lg"
						type="text"
						placeholder="Author"
					/>
				</Form.Group>

				<input
					className="form-control"
					type="file"
					id="file"
					accept=".pdf"
					name="file"
					onChange={(e) => handleChange(e)}
					style={{ display: 'none' }}
				/>
				<br />
				<br />

				<label
					style={{
						margin: '0px auto',
						background: 'red',
						textAlign: 'center',
						width: '20%',
						fontSize: '1.3rem',
						padding: '1%',
						cursor: 'pointer',
						background: '#b2bec3',
						border: '2px solid #dfe6e9',
					}}
					for="file"
				>
					Attache Book File <BsPaperclip style={{ fontSize: 30 }} />
				</label>

				<div className="btn2">
					<button onClick={() => setModalShow(true)} type="submit">
						Add Books
					</button>
				</div>
			</Form>

			<br />
			<br />
			<br />

			<MyVerticallyCenteredModal
				show={modalShow}
				onHide={() => setModalShow(false)}
			/>
		</div>
	);
}
