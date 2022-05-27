const { Schema, model } = require("mongoose")


const parcSchema = new Schema(
    {
        name: { type: String },
        motorcycletype: [{
            type: Schema.Types.ObjectId,
            ref: "Motorcycletype"
        }],
        capacite: { type: String },
        position: { type: Object },
    },
    { timestamps: true }
)

const parcModel = model("Parc", parcSchema);

module.exports = {
    parcModel
}
