import Building from '../model/building.js';
import asyncHandler from 'express-async-handler'

export const getBuildings = asyncHandler(async (req, res) => {
    const buildings = await Building.find({})
    res.json(buildings)
})

export const getBuildingById = asyncHandler(async (req, res) => {
    const building = await Building.findById(req.params.id)

    if (building) {
        res.json(building)
    } else {
        res.status(404).json({message: "building not found"})
        res.status(404)
        throw new Error('building not found')
    }
})
