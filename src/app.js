import cors from "cors";
import express from "express";
import authRouter from "./routes/authentication.route.js";
import tweetsRouter from "./routes/tweets.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(authRouter)
    .use(tweetsRouter)

app.listen(5000, () => {
    console.log("Magic happens on port 5000");
});