const router = require("express").Router()

const { UserRouter, MotorcycleRouter, ParcRouter } = require("./v1")



router.use(UserRouter)
router.use(MotorcycleRouter)
router.use(ParcRouter)
module.exports = {
    router
}