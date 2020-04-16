import React from 'react';

export const Weather = (props) => {
	console.log('Weather', props);
	return (
		<>
			{props.weather === undefined ? (
				''
			) : (
				<div>
					<p>Weather Information</p>
					<p>Temperature: {props.weather.tp}</p>
					<p>Humidity: {props.weather.hu}%</p>
					<p>Wind Speed: {props.weather.ws} m/s</p>
				</div>
			)}
		</>
	);
};
