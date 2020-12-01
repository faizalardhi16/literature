import React, { useState } from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Style/style.css';

export default function Fetching(props) {
	return (
		<div>
			<Link
				className="Links"
				style={{ color: 'black' }}
				to={`/literature/detail/${props.id}`}
			>
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
					</Card.Body>
				</div>
			</Link>
		</div>
	);
}
