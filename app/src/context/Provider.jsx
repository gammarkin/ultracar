import {MyContext} from './MyContext';
import React, {useState} from 'react';

const Provider = ({children}) => {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [search, setSearch] = useState('');
	const [order, setOrder] = useState({});

	const payload = {
		loading,
		setLoading,
		products,
		setProducts,
		search,
		setSearch,
		order,
		setOrder,
	};

	return <MyContext.Provider value={payload}>{children}</MyContext.Provider>;
};

export default Provider;
