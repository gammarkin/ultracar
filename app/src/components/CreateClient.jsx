import React from 'react';
import {Input} from 'antd';

const CreateClient = ({setClient}) => {
	const getName = ({target: {value: name}}) =>
		setClient((client) => ({...client, name}));

	const getAddress = ({target: {value: address}}) =>
		setClient((client) => ({...client, address}));

	const getCar = ({target: {value: car}}) =>
		setClient((client) => ({...client, car}));

	const getCpf = ({target: {value: cpf}}) =>
		setClient((client) => ({...client, cpf}));

	return (
		<div>
			<p>Nome</p>
			<Input placeholder="Pesquisar" onChange={getName} />

			<p>Endereço</p>
			<Input placeholder="Pesquisar" onChange={getAddress} />

			<p>Carro</p>
			<Input placeholder="Pesquisar" onChange={getCar} />

			<p>CPF</p>
			<Input placeholder="Pesquisar" onChange={getCpf} />
		</div>
	);
};

export default CreateClient;
