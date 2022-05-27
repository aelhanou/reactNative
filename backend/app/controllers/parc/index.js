const { parcModel } = require("../../models")




const createParc = async (data) => {
    let parc = await parcModel.create(data)
    console.log(parc);
    return parc
}




const getParcs = async () => {
    return parcModel.find().populate("motorcycletype")
}





module.exports = {
    createParc,
    getParcs
}