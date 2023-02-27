import { Tweet } from "../services/tweets.service.js";

function postTweet(req, res) {
    const { username, tweet } = req.body;

    try {
        const postTweet = new Tweet({ username, tweet }).createNewTweet();
        return res.status(201).send("Okay");
    } catch (error) {
        return res.status(400).send(error);
    }
}

export {
    postTweet,
};
