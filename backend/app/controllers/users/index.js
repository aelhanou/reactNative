const { userModel } = require("../../models")




const createUser = async (data) => {
    let user = await userModel.create(data)
    return user.id
}


const loginUser = async (data) => {
    try {
        let { email, password } = data
        return await userModel.findOne({ email, password })
    } catch (error) {
        throw error
    }

}






module.exports = {
    createUser,
    loginUser
}