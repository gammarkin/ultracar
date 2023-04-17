import orders from "../models/order.js";
import { Router } from "express";

const router = Router();

router.get(
    "/",
    async (_req, res) => {
        const orders = await orders.read();

        return res.status(200).json(orders);
    }
)

router.get(
    "/:id",
    async (req, res) => {
        const { id } = req.params;
        const order = await orders.readOne(id);

        return res.status(200).json(order);
    }
);

router.post(
    "/",
    async (req, res) => {
        let order = await orders.create(req.body);

        return res.status(201).json({ created: order });
    }
);

router.delete(
    "/",
    async (_req, res) => {
        await orders.destroyAll();

        return res.status(204).end();
    }
);

export default router;