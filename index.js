import express from "express"
import path from "path"
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
dotenv.config()

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()



app.get('/',(req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})
app.get('/home',(req, res) => {
    res.json({message:"This is home page"})
})

const port = process.env.PORT || 8080
app.listen(port, console.log(`Server is running on port ${port}`))