import Express from "express";
import cors from "cors"
import cookieParser from "cookie-parser";

const app = Express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//middlewares
app.use(Express.json({limit: "16kb"}))
app.use(Express.urlencoded({extended: true, limit: "16kb"}))
app.use(Express.static("Public"))
app.use(cookieParser()) 

//route import
import userRouter from "./routes/user.router.js"

// routes declaration
app.use("/api/v1/users", userRouter)

app.get('/', (req, res) => {
    res.send("@saurya")
})

export { app } 