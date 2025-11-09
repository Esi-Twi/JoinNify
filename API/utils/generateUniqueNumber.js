
exports.uniqueTicketNumber = async() => {
    return Math.floor( 100000 +  Math.random() * 99999999)
}