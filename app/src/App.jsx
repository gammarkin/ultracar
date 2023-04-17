import React from 'react';
import UCarLogo from './assets/Logo Nova-04.png';

import SearchInput from './components/SearchInput';
import Provider from './context/Provider';
import Products from './components/Products';
import OrderForm from './components/OrderForm';

import './index.css';

function App() {
	return (
		<Provider>
			<div className="App">
				<header>
					<img className="U__carLogo" src={UCarLogo} />
				</header>
				<main>
					<section>
						<SearchInput />
						<Products />
					</section>
					<section>
						<OrderForm />
					</section>
				</main>
			</div>
		</Provider>
	);
}

export default App;
