import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Styled from 'styled-components';

import { Weather } from './Weather';
import { Pollution } from './Pollution';

export const CityInfo = (props) => {
	const [info, setInfo] = useState({});

	useEffect(() => {
		axios
			.get(
				`https://api.airvisual.com/v2/city?city=${props.city}&state=${props.state}&country=USA&key=b575afae-36b5-4d77-9257-1db9e7fe25c4`
			)
			.then((res) => {
				setInfo(res.data.data.current);
			})
			.catch((err) => {
				console.log('Cannot get city data', err);
			});
	}, [props.city, props.state]);

	const InfoContainer = Styled.div`
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 2%;
	`;

	return (
		<div>
			<div className='city-info'>
				<InfoContainer>
					<Weather weather={info.weather} />
					<Pollution pollution={info.pollution} />
				</InfoContainer>
			</div>
		</div>
	);
};
