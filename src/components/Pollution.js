import React from 'react';
import Styled from 'styled-components';

export const Pollution = (props) => {
	const PollutionContainer = Styled.div`
	padding: 8%;
	min-height: 15rem;
	margin: 2%;
	width: 40rem;
	text-align: center;
`;

	return (
		<>
			{props.pollution === undefined ? (
				''
			) : (
				<PollutionContainer className='max-w-sm rounded overflow-hidden shadow-lg'>
					<p className='font-bold text-xl mb-2'>Pollution Information</p>
					<p>Air Quality Index - US: {props.pollution.aqius}</p>
					<p>Air Quality Index - China: {props.pollution.aqicn}</p>
				</PollutionContainer>
			)}
		</>
	);
};
