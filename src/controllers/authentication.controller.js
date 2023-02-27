import { AuthenticateUser } from "../services/authentication.service.js";

function signUp(req, res) {
    const { username, avatar } = req.body;

    try {
        const user = new AuthenticateUser({ username, avatar }).createNewUser();
        return res.status(201).send("Okay");
    } catch (error) {
        return res.status(400).send(error);
    }
}

export {
    signUp,
}