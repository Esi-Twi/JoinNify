

exports.bookTicket = async (req, res) => {

    res.json({msg: "book a ticket"})

    try {

    } catch (error) {
        res.status(400).json({ success: false, message: error.message })
        console.log("error in book ticket route", error);
    }
}


