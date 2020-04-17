import React from 'react';
import Styled from 'styled-components';

export const Footer = () => {
	const Footer = Styled.div`
     display: flex;
     justify-content: center;
     align-items: flex-end
    `;

	return (
		<Footer>
			<p>Built By John Kirtley Using React and TailwindCSS</p>
		</Footer>
	);
};
