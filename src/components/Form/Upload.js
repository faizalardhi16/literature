import React, { useState } from 'react';

export default function Upload() {
	const [form, setForm] = useState({
		title: '',
		images: null,
		approve: 'Approve',
	});

	const handleChange = (e) => {
		e.target.type === 'file'
			? setForm({
					...form,
					[e.target.name]: e.target.files[0],
			  })
			: setForm({
					...form,
					[e.target.name]: e.target.value,
			  });
	};

	console.log(form);

	return (
		<form>
			<div className="form-group">
				<input type="text" name="title" onChange={(e) => handleChange(e)} />
			</div>

			<div className="form-group">
				<input type="file" name="images" onChange={(e) => handleChange(e)} />
			</div>

			<div className="form-group"></div>

			<div className="form-group"></div>

			<div className="form-group"></div>

			<div className="form-group"></div>
		</form>
	);
}
