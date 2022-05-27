const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors");
const fileUpload = require('express-fileupload');
const fs = require("fs")
const path = require("path")
const { router } = require("../routes")

require("dotenv").config()


const runServer = () => {
    const PORT = process.env.PORT
    const DB_HOST = process.env.DB_HOST

    const app = express()
    app.use(fileUpload());


    app.use(cors({
        credentials: true,
        origin: "*"
    }))

    app.use("/images/:id", async (req, res) => {
        const { id } = req.params
        let isExist = fs.readdirSync(path.join(process.cwd() + "/app/images")).includes(id)
        if (isExist) {
            const imageStreaming = fs.createReadStream(path.join(process.cwd() + "/app/images/" + id));
            imageStreaming.pipe(res);
        } else {
            res.status(400).send("This Image is not Exist")
        }
    })

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));



    app.use(router)

    mongoose.connect(DB_HOST, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("connected");
    })
    app.listen(PORT, () => {
        console.log(`Server is Running in Port: ${PORT} http://localhost:${PORT}`);
    })
}


module.exports = {
    runServer
}