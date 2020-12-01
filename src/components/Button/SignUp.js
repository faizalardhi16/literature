import React, { useState, useContext } from 'react';
import { Button, Modal, Form, InputGroup } from 'react-bootstrap';
import '../Style/landing.css';
import { UserContext } from '../../context/UserContext';
import { API, setAuthToken } from '../../config/api';
import { useHistory } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function SignUp(props) {
	let history = useHistory();
	const [state, dispatch] = useContext(UserContext);
	const [show, setShow] = useState(false);

	const [formData, setFormData] = useState({
		fullName: '',
		email: '',
		password: '',
		phone: '',
		address: '',
		gender: '',
	});

	const { fullName, email, password, phone, address, gender } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	console.log(formData);
	const handleSubmits = (e) => {
		e.preventDefault();

		console.log(formData);
		handleClose();
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (
			fullName != '' &&
			gender != '' &&
			email != '' &&
			password != '' &&
			phone != '' &&
			address != ''
		) {
			console.log(formData);
			handleClose();
			setFormData('');
		}

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({
			fullName,
			email,
			password,
			gender,
			phone,
			address,
			isadmin: false,
		});

		try {
			const res = await API.post('/register', body, config);

			dispatch({
				type: 'REGISTER_SUCCESS',
				payload: res.data.data,
			});

			console.log('SINI');

			setAuthToken(res.data.data.token);

			try {
				const res = await API.get('/auth');

				dispatch({
					type: 'USER_LOADED',
					payload: res.data.data.users,
				});
				history.push('/home');
			} catch (error) {
				dispatch({
					type: 'AUTH_ERROR',
				});
				alert('user tidak terdaftar');
			}
		} catch (error) {
			dispatch({
				type: 'LOGIN_FAILED',
			});
		}
	};

	const handleClose = () => setShow(false);

	return (
		<Modal
			{...props}
			size="sm"
			aria-labelledby="contained-modal-title-vcenter"
			centered
		>
			<Modal.Body style={{ background: '#000000', border: '2px solid grey' }}>
				<h4
					style={{
						color: '#ffffff',
						paddingBottom: '3%',
					}}
				>
					Sign Up
				</h4>
				<Form onSubmit={(e) => handleSubmit(e)}>
					<Form.Group controlId="email">
						<Form.Control
							style={{
								background: '#2d3436',
								border: '2px solid #b2bec3',
								color: '#FFFFFF',
							}}
							value={email}
							type="email"
							name="email"
							placeholder="Email"
							onChange={(e) => handleChange(e)}
							required
						/>
					</Form.Group>

					<InputGroup controlId="password" className="mb-3">
						<Form.Control
							type={show ? 'text' : 'password'}
							placeholder="Password"
							value={password}
							name="password"
							style={{
								background: '#2d3436',
								border: '2px solid #b2bec3',
								color: '#FFFFFF',
							}}
							onChange={(e) => handleChange(e)}
							required
						/>
						<InputGroup.Append>
							<InputGroup.Text
								id="basic-addon2"
								onClick={() => setShow(!show)}
								style={{ width: 46, background: '#2d3436' }}
								onChange={(e) => handleChange(e)}
							>
								{show ? (
									<AiOutlineEye size="20px" />
								) : (
									<AiOutlineEyeInvisible size="20px" />
								)}
							</InputGroup.Text>
						</InputGroup.Append>
					</InputGroup>

					<Form.Group controlId="name">
						<Form.Control
							type="text"
							value={fullName}
							name="fullName"
							style={{
								background: '#2d3436',
								border: '2px solid #b2bec3',
								color: '#FFFFFF',
							}}
							onChange={(e) => handleChange(e)}
							placeholder="Full Name"
							required
						/>
					</Form.Group>

					<Form.Group controlId="gender">
						<Form.Control
							as="select"
							onChange={(e) => handleChange(e)}
							name="gender"
							style={{
								background: '#2d3436',
								border: '2px solid #b2bec3',
								color: '#636e72',
							}}
							value={gender}
							required
						>
							<option value="Male">Male</option>
							<option value="Female">Female</option>
							<option value="Other">Other</option>
						</Form.Control>
					</Form.Group>

					<Form.Group controlId="phone">
						<Form.Control
							style={{
								background: '#2d3436',
								border: '2px solid #b2bec3',
								color: '#FFFFFF',
							}}
							type="text"
							onChange={(e) => handleChange(e)}
							name="phone"
							value={phone}
							placeholder="Phone"
							required
						/>
					</Form.Group>

					<Form.Group controlId="address">
						<Form.Control
							style={{
								background: '#2d3436',
								border: '2px solid #b2bec3',
								color: '#FFFFFF',
							}}
							onChange={(e) => handleChange(e)}
							value={address}
							name="address"
							type="text"
							placeholder="Address"
							required
						/>
					</Form.Group>
					<br />
					<Button
						type="submit"
						block
						style={{ background: '#AF2E1C', border: 'none' }}
						className="buttons"
					>
						Sign Up
					</Button>
				</Form>
				<p className="account mt-3">
					Don't have an account?{' '}
					<span className="here" onClick={props.haveAcc}>
						Click Here
					</span>
				</p>
			</Modal.Body>
		</Modal>
	);
}
