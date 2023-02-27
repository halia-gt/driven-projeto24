import cors from "cors";
import express from "express";
import router from "./routes/authentication.route.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.listen(5000, () => {
    console.log("Magic happens on port 5000");
});