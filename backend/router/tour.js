import express from 'express'
import {
        createTour,
        deleteTour,
        getAllTours,
        getFeaturedTours,
        getSingleTour,
        getTourBySearch,
        getTourCount,
        updateTour
    } from './../controller/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js'

const router = express.Router()

// create new tour
router.post('/', verifyAdmin, createTour)
// update tour
router.put("/:id",  verifyAdmin, updateTour)
// delte tour
router.delete("/:id", deleteTour)
// get single tour
router.get("/:id", getSingleTour)
// create new tour
router.get("/", getAllTours)
// get tour by search
router.get("/search/getTourBySearch", getTourBySearch)
router.get("/search/getFeaturedTours", getFeaturedTours)
router.get("/search/getTourCount", getTourCount)

export default router 