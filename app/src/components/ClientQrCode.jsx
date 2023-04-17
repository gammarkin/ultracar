import {QRCode, Space} from 'antd';
import React from 'react';

const ClientQrCode = ({client}) => {
	const text = `https://ultracar.vercel.app/clients/${client.cpf}`;

	return (
		<Space direction="vertical" align="center">
			Leia o QRCode para acessar mais informações do cliente {client.name}
			<QRCode value={text} />
		</Space>
	);
};

export default ClientQrCode;
