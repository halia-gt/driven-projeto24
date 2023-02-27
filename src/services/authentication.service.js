export const users = [];

export class AuthenticateUser {
    constructor({ username,  avatar }) {
        if (!username || !avatar) {
            throw new Error("Login must have username and avatar");
        }
        this.username = username;
        this.avatar = avatar;
    }

    createNewUser() {
        users.push({
            username: this.username,
            avatar: this.avatar
        });
    }
}