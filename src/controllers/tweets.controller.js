import { filterTweetsByUser, Tweet } from "../services/tweets.service.js";

function postTweet(req, res) {
    const { username, tweet } = req.body;

    try {
        const postTweet = new Tweet({ username, tweet }).createNewTweet();
        return res.status(201).send("Okay");
    } catch (error) {
        return res.status(400).send(error);
    }
}

function filterTweets(req, res) {
    const { username } = req.params;

    try {
        const tweets = filterTweetsByUser(username);
        return res.status(200).send(tweets);
    } catch (error) {
        return res.status(400).send(error);
    }
}

export {
    postTweet,
    filterTweets,
};
