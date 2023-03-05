import Tour from '../models/Tour.js'

//Create new tour
export const createTour = async(req, res) =>{
    
    const newTour = new Tour(req.body)

    try{
        const savedTour = await newTour.save()
        res.status(200)
           .json({
                success:true,
                message:'Successfully created',
                data:savedTour
        })
    } catch (err){
        res.status(500)
            .json({
                success:false,
                message:'Faild to create. Try again',
        })
    }
}

// Update tour
export const updateTour = async (req, res) => {
       
    const id = req.params.id 
    
    try {

        const updatedTour = await Tour.findByIdAndUpdate(id, {
            $set: req.body
        }, {new:true})

        res.status(200).json({
            success: true,
            message: "Successfully Updated",
            data: updatedTour
        })
        
     } catch (error) {
        res.status(500).json({
            success: false,
            message: "failed to update"
        })  
     }
}

// Delete tour
export const deleteTour = async (req, res) => {
    try {

        await Tour.findByIdAndDelete(id)
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

// Get Single tour
export const getSingleTour = async (req, res) => {
    try {

        const tour = await Tour.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Successfully",
            data:  tour
        })
        
     } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })  
     }
}

// Get All tourss
export const getAllTours = async (req, res) => {
   // const page = parserInt(req.query.page)
    try {
        
        const tours = await Tour.find()//.skip(page * 8).limit(8)
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successfully",
            data:  tours
        })
        
     } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })  
     }
}


export const getTourBySearch = async(req, res )=>{

    const city = new RegExp(req.query.city, 'i')
    const distance = parseInt(req.query.distance)
    const maxGroupSize = parseInt(req.query.maxGroupSize)
    
    try {
        
        const tours = await Tour.find({city, distance:{$gte:distance},
        maxGroupSize:{$gta:maxGroupSize}})

        res.status(200).json({
            success: true,
            message: "successful",
            data:tours
        })

    } catch (err) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })
    }
}

// Get Featured tour
export const getFeaturedTours = async (req, res) => {
    try {
        const page = parserInt(req.query.page)
        const tours = await Tour.find({featured:true}).limit(8)
        res.status(200).json({
            success: true,
            count: tours.length,
            message: "Successfully",
            data:  tours
        })
        
     } catch (error) {
        res.status(404).json({
            success: false,
            message: "Not found"
        })  
     }
}

// Get tour counts

export const getTourCount = async (req, res) => {
    try {
        
        const tourCount  = await Tour.estimatedDocumentCount()        
        res.status(200).json({ success: true, data: tourCount})

    } catch (error) {
        
        res.status(500).json({ success: false, message: "faild to fetch"})
    }
}