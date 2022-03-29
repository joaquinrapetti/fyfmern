import express from "express";
const router = express.Router()

import { createTravel, deleteTravel, updateTravel, getAllTravels, showStats } from "../controllers/travelsController.js";

router.route('/').post(createTravel).get(getAllTravels)
// remember about :id
router.route('/stats').get(showStats)
router.route('/:id').delete(deleteTravel).patch(updateTravel)

export default router;