import express from "express";
import { postTweet } from "../controllers/tweets.controller.js";

const router = express.Router();

router.post("/tweets", postTweet);

export default router;
