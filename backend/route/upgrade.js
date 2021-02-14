import {getUpgradeById, getUpgrades, postUpgrade} from "../controller/upgrade.js";
import express from 'express'

const router = express.Router()
router.route('/').get(getUpgrades)
router.route('/:id').get(getUpgradeById)

router.route('/').post(postUpgrade)

export default router
