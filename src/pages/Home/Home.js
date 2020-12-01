import React, { useState, useEffect } from 'react';

import Search from '../../components/Search';
import '../../components/stylez.css';

export default function Home() {
	return (
		<div style={{ height: '100vh' }} className="countain">
			<Search />
		</div>
	);
}
