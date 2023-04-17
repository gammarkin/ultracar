import React, {useContext, useState} from 'react';
import {Input, Space, Checkbox} from 'antd';
import {MyContext} from '../context/MyContext';

const {Search} = Input;

const SearchInput = () => {
	const {setLoading, setProducts} = useContext(MyContext);
	const [disabled, setDisabled] = useState(true);

	const handleCheckbox = () => {
		setDisabled((disabled) => !disabled);
		return setProducts([]);
	};

	const onSearch = async (search) => {
		if (search === '') return alert('Digite um valor válido!');

		setLoading(true);

		const products = await (
			await fetch(`http://localhost:3001/products/${search}`)
		).json();

		setProducts(products);
		return setLoading(false);
	};

	return (
		<Space direction="vertical">
			<Checkbox className="check--" onChange={handleCheckbox}>
				Precisa de novas peças?
			</Checkbox>
			<Search
				disabled={disabled}
				placeholder="Adicionar Peças"
				onSearch={onSearch}
				onSubmit={onSearch}
				style={{width: 500}}
			/>
		</Space>
	);
};

export default SearchInput;
