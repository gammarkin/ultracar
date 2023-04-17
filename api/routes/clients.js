import { Router } from 'express';

import clients from '../models/client.js';

const router = Router();

router.get(
	'/',
	async (_req, res) => {
		const results = await clients.read();

		return res.status(200).json(results);
	}
)

router.get(
	'/:id',
	async (req, res) => {
		const { id } = req.params;
		const result = await clients.readOne(id) || {};

		return res.status(200).json(result);
	}
);

router.post(
	'/',
	async (req, res) => {
		let client = await clients.create(req.body);

		return res.status(201).json({ created: client });
	}
);

router.delete(
	'/',
	async (_req, res) => {
		await clients.destroyAll();

		return res.status(204).end();
	}
);

export default router;
