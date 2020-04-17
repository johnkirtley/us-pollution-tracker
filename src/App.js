import React from 'react';
import Styled from 'styled-components';

import { Header } from './components/Header';
import { Country } from './components/Country';
import { Footer } from './components/Footer';

const Container = Styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 55%;
`;

const App = () => {
	return (
		<>
			<Container>
				<Header />
				<Country />
			</Container>
			<Footer />
		</>
	);
};

export default App;
