const { Upload } = require("../../middlewares")
const { MotorcycletypeModel } = require("../../models")




const createMotorcycletype = async (req, res) => {
    let img = await Upload(req, res)
    let moto = await MotorcycletypeModel.create({ ...req.body, images: img })
    return moto
}



const getMotorcycletypes = async () => {
    return MotorcycletypeModel.find()
}







module.exports = {
    createMotorcycletype,
    getMotorcycletypes
}