import React from 'react';
import Styled from 'styled-components';

export const Weather = (props) => {
	const WeatherContainer = Styled.div`
	padding: 8%;
	min-height: 15rem;
	margin: 2%;
	width: 40rem;
	text-align: center;
	`;
	return (
		<>
			{props.weather === undefined ? (
				''
			) : (
				<WeatherContainer className='max-w-sm rounded overflow-hidden shadow-lg'>
					<p className='font-bold text-xl mb-2'>Weather Information</p>
					<p>Temperature: {props.weather.tp}</p>
					<p>Humidity: {props.weather.hu}%</p>
					<p>Wind Speed: {props.weather.ws} m/s</p>
				</WeatherContainer>
			)}
		</>
	);
};
