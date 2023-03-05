import User from '../models/User.js'

//Create new User
export const createUser = async(req, res) =>{
    
    const newUser = new User(req.body)

    try{
        const savedUser = await newUser.save()
        res.status(200)
           .json({
                success:true,
                message:'Successfully created',
                data:savedUser
        })
    } catch (err){
        res.status(500)
            .json({
                success:false,
                message:'Faild to create. Try again',
        })
        console.log(err);
    }
}

// Update User
export const updateUser = async (req, res) => {
       
    const id = req.params.id 
    
    try {

        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res.status(200).json({
            success: true,
            message: "Successfully Updated",
            data: updatedUser
        })
        
     } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to update"
        })  
     }
}

// Delete User
export const deleteUser = async (req, res) => {
    try {

        await User.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Successfully Deleted",
        })
        
     } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to Delete"
        })  
     }
}

// Get Single User
export const getSingleUser = async (req, res) => {
    try {

        const user = await User.findByIdAndDelete(id)
        res.status(200).json({
            success : true,
            message: "Successfully",
            data:  user
        })
        
     } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })  
     }
}

// Get All Users
export const getAllUsers = async (req, res) => {
    try {
        
        const users = await User.find({})
        res.status(200).json({
            success: true,
            message: "Successfully",
            data:  Users
        })
        
     } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })  
     }
}


export const getUserBySearch = async(req, res )=>{

    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    
    try {
        
        const Users = await User.find({city, distance:{$gte:distance},
        maxGroupSize:{$gta:maxGroupSize}})

        res.status(200).json({
            success: true,
            message: "successful",
            data:Users
        })

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })
    }
}