const { createUser, loginUser } = require("../../../controllers")

const router = require("express").Router()


router.post("/register", async (req, res) => {

    let data = await createUser(req.body)
    if (!data.id) res.status(404).json({ msg: data })
    // await getChambreById("61dac0e28f5e580f90fccaf9")
    res.status(201).json(data)
})


router.post("/login", async (req, res) => {
    try {
        let data = await loginUser(req.body)
        console.log(data);
        res.status(200).json(data)
    } catch (error) {
        throw error
    }

})



// router.get("/deleteChambre/:id", async (req, res) => {
//     let { id } = req.params
//     await deleteChambre(id)
//     res.status(204).json({
//         message: "Deleted successfully"
//     })
// })


// router.post("/updateChambre", async (req, res) => {
//     let { data } = req.body
//     await updateChambre(data)

//     res.status(204).json({
//         message: "updated successfully"
//     })

// })


module.exports = {
    UserRouter: router
}



