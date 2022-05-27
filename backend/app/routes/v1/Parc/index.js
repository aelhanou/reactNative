const { createParc, getParcs } = require("../../../controllers")

const router = require("express").Router()


router.post("/createParc", async (req, res) => {

    // if (!dataChambre) {
    //     res.status(500).json({
    //         message: "fill the fields inputs"
    //     })
    // }
    let data = await createParc(req.body)
    // await getChambreById("61dac0e28f5e580f90fccaf9")
    res.status(201).json(data)
})


router.get("/getParcs", async (req, res) => {
    let data = await getParcs()
    res.status(200).json(data)

})






module.exports = {
    ParcRouter: router
}





