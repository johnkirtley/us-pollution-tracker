import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { CityInfo } from './cityInfo';

export const Selection = (props) => {
	const [cities, setCities] = useState([]);
	const [selectedCity, setSelectedCity] = useState('');

	useEffect(() => {
		axios
			.get(
				`https://api.airvisual.com/v2/cities?state=${props.state}&country=USA&key=b575afae-36b5-4d77-9257-1db9e7fe25c4`
			)
			.then((res) => {
				setCities(res.data.data);
			})
			.catch((err) => {
				console.log('Could not get states', err);
			});
	}, [props.state]);

	const onSelect = (e) => {
		setSelectedCity(e.target.value);
		console.log(selectedCity);
	};

	return (
		<div>
			<p>Select Your City</p>
			<select selected='Select City' onChange={onSelect}>
				{cities === undefined
					? ''
					: cities.map((location) => (
							<option value={location.city}>{location.city}</option>
					  ))}
			</select>
			<CityInfo city={selectedCity} state={props.state} />
		</div>
	);
};
