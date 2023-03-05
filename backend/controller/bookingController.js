import booking from "../models/booking.js"
import Booking from "../models/booking.js"
 

//create new book 
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)

    try {
        const saveBooking = await newBooking.save()

        res.status(200)
        .json({
            success:true,
            message: "Your tour is booked",
            data: saveBooking
        })
    } catch (error) {
        res.status(500).json({ success: true, message: "internal server error"})
    }
}


// get single booking
export const getBooking = async(req, res)=>{
    const id = req.param.id

    try {
        const book = await Booking.findById(id)
        res.status(200)
        .json({
            success:true,
            message: "successful",
            data: book
        })
    } catch (error) {
        res.status(400).json({ success: true, message: "not found"})
    }
}

//get all book
export const getAllBooking = async(req, res)=>{

    try {
        const books = await Booking.find()
        res.status(200)
        .json({
            success:true,
            message: "successful",
            data: books
        })
    } catch (error) {
        res.status(500).json({ success: true, message: "internal server error"})
    }
}