const Event = require("../models/event.model")
const Ticket = require("../models/ticket.model")

//check if event exist and is approved 
//create a qr code for event 
//take event id, event price, attendee
// create event in database
exports.bookTicket = async (req, res) => {
    const {id} = req.params
    
    try {
        const existingEvent = await Event.findOne({_id: id, isApproved: true, deleted: false})
        if(!existingEvent) {
            return res.status(400).json({ success: false,  message: "Event does not exist!!!" })
        }




        res.json({existingEvent})

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in book ticket route", error);
    }
}


