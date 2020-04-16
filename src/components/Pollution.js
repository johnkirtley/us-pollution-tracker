import React from 'react';

export const Pollution = (props) => {
	console.log('Pollution', props);

	return (
		<>
			{props.pollution === undefined ? (
				''
			) : (
				<div>
					<p>Pollution Information</p>
					<p>Air Quality Index - US: {props.pollution.aqius}</p>
					<p>Air Quality Index - China: {props.pollution.aqicn}</p>
				</div>
			)}
		</>
	);
};
