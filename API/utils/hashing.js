const bycryptjs = require('bcryptjs')

exports.doHash = (value, salt) => {
    return bycryptjs.hash(value, salt)
}


exports.doHashValidation = (value, hashedPassword) => {
    return bycryptjs.compare(value, hashedPassword)
}