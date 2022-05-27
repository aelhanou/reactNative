const { Schema, model } = require("mongoose")


const MotorcycletypeSchema = new Schema(
    {
        name: { type: String },
        batteryCapacity: { type: String },
        range: { type: String },
        topSpeed: { type: String },
        Weight: { type: String },
        description: { type: String },
        colors: [{ type: String }],
        images: [{ type: String }],
        rentPriceMounthly: { type: String },
    },
    { timestamps: true }
)

const MotorcycletypeModel = model("Motorcycletype", MotorcycletypeSchema);

module.exports = {
    MotorcycletypeModel
}
