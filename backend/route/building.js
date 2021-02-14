import {getBuildingById, getBuildings, postBuilding} from "../controller/building.js";
import express from 'express'

const router = express.Router()
router.route('/').get(getBuildings)
router.route('/:id').get(getBuildingById)

router.route('/').post(postBuilding)

export default router
