const { createMotorcycletype, getMotorcycletypes } = require("../../../controllers")

const router = require("express").Router()


router.post("/addcreateMotorcycle", async (req, res) => {

    // if (!dataChambre) {
    //     res.status(500).json({
    //         message: "fill the fields inputs"
    //     })
    // }
    let data = await createMotorcycletype(req, res)
    // await getChambreById("61dac0e28f5e580f90fccaf9")
    res.status(201).json(data)
})


router.get("/getMotorcycletypes", async (req, res) => {
    let data = await getMotorcycletypes()
    res.status(200).json(data)

})






module.exports = {
    MotorcycleRouter: router
}





