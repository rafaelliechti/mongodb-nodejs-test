import {getBuildingById, getBuildings} from "../controller/building.js";
import express from 'express'

const router = express.Router()
router.route('/').get(getBuildings)
router.route('/:id').get(getBuildingById)
export default router
