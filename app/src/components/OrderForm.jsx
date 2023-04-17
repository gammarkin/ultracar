import React, {useContext, useState, useEffect} from 'react';
import {Input, Form, Button} from 'antd';
import {MyContext} from '../context/MyContext';
import ClientNotFound from './ClientNotFound';
import ClientQrCode from './ClientQrCode';
import {v4 as uuidv4} from 'uuid';

const {Search} = Input;

const clientIsValid = (client, order) => {
	return client.name && order.client_name === client.name;
};

export default function OrderForm() {
	const {setLoading, setOrder, order} = useContext(MyContext);
	const [client, setClient] = useState({});
	const [clientNotFound, setClientNotFound] = useState(false);
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (order.client_name && order.worker_name) {
			setDisabled(false);
		}
	}, [order]);

	const searchClient = async (cpf) => {
		const clientData = await (
			await fetch(`http://localhost:3001/clients/${cpf}`)
		).json();

		if (!clientData.name) return setClientNotFound(true);

		setClient(clientData);
		setClientNotFound(false);
		setOrder((order) => ({...order, client_name: clientData.name}));

		return setLoading(false);
	};

	const handleFinish = async () => {
		setOrder((order) => ({
			...order,
			jobs: order.products
				? `trocado as peças ${order.products.map((product) => `${product} ,`)}`
				: 'não foi trocado nenhuma peça',
			date: new Date().toLocaleDateString(),
			id: uuidv4(),
		}));

		return axios.post('http://localhost:3001/orders', order);
	};

	return (
		<Form>
			<p>Insira o CPF do cliente</p>
			<Form.Item>
				<Search
					className="lope--"
					placeholder="Pesquisar"
					onSearch={searchClient}
					enterButton
				/>
				<p>Insira o nome da pessoa que fará a manutenção</p>
				<Input
					placeholder="Nome Sobrenome"
					onChange={({target: {value}}) =>
						setOrder((order) => ({...order, worker_name: value}))
					}
				/>
			</Form.Item>

			{clientNotFound && (
				<ClientNotFound
					client={client}
					setClientNotFound={setClientNotFound}
					setClient={setClient}
				/>
			)}

			{clientIsValid(client, order) && <ClientQrCode client={client} />}

			<Form.Item>
				<Button disabled={disabled} onClick={handleFinish} type="primary">
					Finalizar
				</Button>
			</Form.Item>
		</Form>
	);
}
