const { createUser, loginUser } = require("./users")
const { createMotorcycletype, getMotorcycletypes } = require("./Motorcycletype")
const { createParc, getParcs } = require("./parc")
module.exports = {
    createUser,
    loginUser,
    createMotorcycletype,
    getMotorcycletypes,
    createParc, getParcs
}