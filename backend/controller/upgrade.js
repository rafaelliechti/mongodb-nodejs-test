import Upgrade from '../model/upgrade.js';
import asyncHandler from 'express-async-handler'

export const getUpgrades = asyncHandler(async (req, res) => {
    const upgrades = await Upgrade.find({})
    res.json(upgrades)
})

export const getUpgradeById = asyncHandler(async (req, res) => {
    const upgrade = await Upgrade.findById(req.params.id)

    if (upgrade) {
        res.json(upgrade)
    } else {
        res.status(404).json({message: "upgrade not found"})
        res.status(404)
        throw new Error('upgrade not found')
    }
})
