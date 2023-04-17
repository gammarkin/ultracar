import React, {useState, useEffect, useContext} from 'react';
import {Button, Modal} from 'antd';
import axios from 'axios';
import CreateClientForm from './CreateClient';
import {MyContext} from '../context/MyContext';

const ClientNotFound = ({setClient, client, setClientNotFound}) => {
	const {setOrder} = useContext(MyContext);

	const [isModalOpen, setIsModalOpen] = useState(false);
	const [disabled, setDisabled] = useState(true);

	useEffect(() => {
		if (client.name && client.address && client.car && client.cpf) {
			setDisabled(false);
		}
	}, [client]);

	const showModal = () => {
		setIsModalOpen(true);
	};

	const handleOk = () => {
		setIsModalOpen(false);
	};

	const handleCancel = () => {
		setIsModalOpen(false);
	};

	const create = async () => {
		await axios.post('http://localhost:3001/clients', client);

		setClientNotFound(false);
		setOrder((order) => ({...order, client_name: client.name}));

		return setIsModalOpen(false);
	};

	return (
		<>
			Cliente não encontrado
			<Button className="ant-btn--" type="primary" onClick={showModal}>
				Criar novo cliente
			</Button>
			<Modal
				title="Criar novo cliente"
				open={isModalOpen}
				onOk={handleOk}
				onCancel={handleCancel}
				footer={[
					<Button type="danger" key="back" onClick={handleCancel}>
						Cancelar
					</Button>,
					<Button
						disabled={disabled}
						key="submit"
						type="primary"
						onClick={create}
					>
						Criar
					</Button>,
				]}
			>
				<CreateClientForm setClient={setClient} />
			</Modal>
		</>
	);
};

export default ClientNotFound;
