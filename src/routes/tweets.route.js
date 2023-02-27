import express from "express";
import { filterTweets, postTweet } from "../controllers/tweets.controller.js";

const router = express.Router();

router.post("/tweets", postTweet)
    .get("/tweets/:username", filterTweets);
    //Get tweets com paginação. Não vai usar exatamente oo aqui

export default router;
