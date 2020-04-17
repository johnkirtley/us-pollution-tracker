import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Selection } from './Selection';

export const Country = () => {
	const [states, setStates] = useState([]);
	const [selected, setSelected] = useState('');

	useEffect(() => {
		axios
			.get(
				`https://api.airvisual.com/v2/states?country=USA&key=b575afae-36b5-4d77-9257-1db9e7fe25c4`
			)
			.then((res) => {
				console.log(res.data.data);
				setStates(res.data.data);
			})
			.catch((err) => {
				console.log('Could not get states', err);
			});
	}, []);

	const onSelect = (e) => {
		setSelected(e.target.value);
		// console.log(selected);
	};

	return (
		<div>
			<h2>Select Your State Below</h2>
			<select id='states' onChange={onSelect}>
				<option selected='Select State' disabled>
					Select State
				</option>
				{states.map((location) => (
					<option value={location.state}>{location.state}</option>
				))}
			</select>
			<Selection state={selected} />
		</div>
	);
};
