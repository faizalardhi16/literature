import React, { useState, useContext } from 'react';

import { UserContext } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import { Form, Modal, Button, InputGroup } from 'react-bootstrap';
import '../Style/landing.css';
import { API, setAuthToken } from '../../config/api';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

export default function SignIn(props) {
	let history = useHistory();
	const [exist, setExist] = useState('');
	const [state, dispatch] = useContext(UserContext);

	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const config = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({ email, password });

		try {
			const res = await API.post('/login', body, config);

			dispatch({
				type: 'LOGIN_SUCCESS',
				payload: res.data.data,
			});

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

	const [show, setShow] = useState(false);

	return (
		<>
			<Modal
				{...props}
				size="sm"
				aria-labelledby="contained-modal-title-vcenter"
				centered
			>
				<Modal.Body
					style={{
						background: '#000000',
						border: '2px solid grey',
					}}
				>
					<h4 className="mb-4 sign">Sign In</h4>
					<Form
						onSubmit={(e) => {
							handleSubmit(e);
						}}
					>
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
							/>
						</Form.Group>
						<InputGroup controlId="password" className="mb-3">
							<Form.Control
								type={show ? 'text' : 'password'}
								style={{
									background: '#2d3436',
									border: '2px solid #b2bec3',
									color: '#FFFFFF',
								}}
								value={password}
								name="password"
								placeholder="Password"
								onChange={(e) => handleChange(e)}
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

						{exist === false ? (
							<p
								className="text-danger italic text-center"
								style={{ fontSize: '13px' }}
							>
								You have entered an invalid email or password
							</p>
						) : (
							<br />
						)}

						<Button
							style={{ background: '#AF2E1C', border: 'none' }}
							type="submit"
							block
						>
							Sign In
						</Button>
					</Form>
					<p className="account mt-3">
						Don't have an account?{' '}
						<span className="here" onClick={props.noAcc}>
							Click Here
						</span>
					</p>
				</Modal.Body>
			</Modal>
		</>
	);
}
