const { Schema, model } = require("mongoose")


const userSchema = new Schema(
    {
        name: { type: String },
        email: { type: String },
        password: { type: String },
        cin: { type: String },
        rentmotorcycle: { type: String },
    },
    { timestamps: true }
)

const userModel = model("User", userSchema);

module.exports = {
    userModel
}
