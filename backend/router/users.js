import express from 'express'
import {
        updateUser,
        deleteUser,
        getSingleUser,
        getAllUsers
    
        } from '../controller/userController.js'

const router = express.Router()

import { verifyAdmin, verifyUser } from '../utils/verifyToken.js'

// update User
router.put("/:id", verifyUser, updateUser)
// delte User
router.delete("/:id", verifyUser,deleteUser)
// get single User
router.get("/:id", verifyUser, getSingleUser)
// create new User
router.get("/", verifyAdmin, getAllUsers)

export default router