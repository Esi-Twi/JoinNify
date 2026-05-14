import { AppDataSource } from "@config/data.source"
import { Events } from "@database/entity/events"
import { Users } from "@database/entity/users"
import { AppError } from "@utils/app-errror"
import {bookTicketDTO}  from "types"

const UserRepository = AppDataSource.getRepository(Users)
const EventRepository = AppDataSource.getRepository(Events)


export const bookTicket = async(data: bookTicketDTO) => {
    //check if user exists
    const existingUser = await UserRepository.findOne({
        where: {
            id: data.user_id, 
            deleted: false,
        }
    })
    if(!existingUser) {
        throw new AppError("User not found", 401)
    }

    //check if event exists
    const existingEvent = await EventRepository.findOne({
        where: {
            id: data.event_id,
            is_approved: true, 
            deleted: false,
        }
    })
    if (!existingEvent) {
        throw new AppError("Event does not exist!!!", 401)
    }

}



 // exports.bookTicket = async (req, res) => {
    //     try {
    //         //get event creator details
    //         const eventCreator = await User.findById(existingEvent.creatorId)
    
    //         const totalPrice = existingEvent.ticketPrice * numTickets;
    
    //         //updating events
    //         existingEvent.ticketsSold += numTickets;
    //         existingEvent.totalRevenue += totalPrice;
    //         if (!existingEvent.attendees.includes(userId)) {
    //             existingEvent.attendees.push(userId)
    //         }
    //         await existingEvent.save()
    
    //         const tickets = []
    
    //         for (let i = 0; i < numTickets; i++) {
    //             //generate qr code 
    //             const uniqueNumber = await uniqueTicketNumber();
    //             const qrCodeData = await QRCode.toDataURL(JSON.stringify({ eventId, userId, uniqueNumber}))
    //             const uploaded = await cloudinary.uploader.upload(qrCodeData, {
    //                 folder: 'tickets',
    //                 public_id: `ticket-${eventId}-${userId}`,
    //             });
    //             const ticketImageUrl = uploaded.secure_url;
    
    //             //creating ticket
    //             const newTicket = new Ticket({
    //                 eventId,
    //                 userId,
    //                 expiry: existingEvent.endDate,
    //                 uniqueNumber,
    //                 qr_code: ticketImageUrl
    //             })
    //             await newTicket.save()
    //             tickets.push(newTicket)
    
    //             //send notification to organizer of event
    //             const notification = await Notification.create({
    //                 receiverId: existingEvent.creatorId,
    //                 type: "ticket_created",
    //                 title: "Ticket sold: " + existingEvent.title,
    //                 message: `A new ticket has been sold for your event ${existingEvent.title}.`,
    //                 eventId,
    //             })
    
    //             // real time ticket purchase notification with socket.io
    //             const io = req.app.get("io")
    //             io.to(existingEvent.creatorId.toString()).emit("ticket_notification", notification)
    
    //             //send attendee digital ticket with qrcode via email
    //             await sendTicketEmail(existingUser.name, existingEvent, ticketImageUrl)
    
    //             //send organizer email for  ticket purchase
    //         }
    
    //         await sendOrganizerTicketPurchaseEmail(eventCreator, existingEvent, existingUser, numTickets, totalPrice)
    
    //         res.status(201).json({ success: true, message: "Ticket(s) bought successfully!", tickets, existingEvent })
    
    //     } catch (error) {
    //         res.status(400).json({ success: false, error })
    //         console.log("error in book ticket route", error);
    //     }
    // }