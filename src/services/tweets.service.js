import { users } from "./authentication.service.js";

const tweets = [];

export class Tweet {
    constructor({ username,  tweet }) {
        if (!username || !tweet) {
            throw new Error("To post a Tweet must have username and the tweet");
        }
        this.username = username;
        this.tweet = tweet;
    }

    createNewTweet() {
        const user  = users.find(e => e.username = this.username);
        tweets.push({
            ...user,
            tweet: this.tweet,
        });
    }
}