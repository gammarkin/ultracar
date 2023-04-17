import { Router } from "express";
import scrapeML, { ML_ENDPOINT } from '../utils/scrapeML.js';

const router = Router();

router.get(
    '/:search',
    async (req, res) => {
        const { search } = req.params;
        const ENDPOINT_ML = ML_ENDPOINT(search);

        const products = await scrapeML(ENDPOINT_ML);

        if (!products) {
            return []
        }

        return res.status(200).json(products);
    }
);

export default router;