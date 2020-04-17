import React from 'react';
import Styled from 'styled-components';

import { Header } from './components/Header';
import { Country } from './components/Country';

const Container = Styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

const App = () => {
	return (
		<Container>
			<Header />
			<Country />
		</Container>
	);
};

export default App;
