import {getUpgradeById, getUpgrades} from "../controller/upgrade.js";
import express from 'express'

const router = express.Router()
router.route('/').get(getUpgrades)
router.route('/:id').get(getUpgradeById)
export default router
