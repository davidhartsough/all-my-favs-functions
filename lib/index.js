"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profile = void 0;
const https_1 = require("firebase-functions/v2/https");
const logger_1 = require("firebase-functions/logger");
const app_1 = require("firebase-admin/app");
const firestore_1 = require("firebase-admin/firestore");
const render_1 = __importDefault(require("./render"));
(0, app_1.initializeApp)();
const firestore = (0, firestore_1.getFirestore)();
const usersDB = firestore.collection("users");
const listsDB = firestore.collection("lists");
const cors = "all-my-favs.web.app";
async function getUser(id) {
    const doc = await usersDB.doc(id).get();
    if (!doc.exists)
        return false;
    return Object.assign({ id: doc.id }, doc.data());
}
async function getLists(username) {
    const snapshot = await listsDB.where("username", "==", username).get();
    if (snapshot.empty)
        return [];
    return snapshot.docs.map((doc) => doc.data());
}
exports.profile = (0, https_1.onRequest)({ cors }, async (req, res) => {
    (0, logger_1.log)("profile invoked");
    if (req.method === "PUT" ||
        req.method === "POST" ||
        req.method === "DELETE") {
        res.status(403).send("Forbidden");
        return;
    }
    const { path, url } = req;
    (0, logger_1.log)(`path: "${path}"`);
    (0, logger_1.log)(`url: "${url}"`);
    (0, logger_1.log)("200 success");
    if (path.length <= 1) {
        (0, logger_1.log)("no username");
        res.redirect("/");
        return;
    }
    const username = path.slice(1);
    const user = await getUser(username);
    if (!user) {
        (0, logger_1.log)("404 not found");
        res.status(404).json({ message: "Not found", username });
        return;
    }
    const { name } = user;
    const lists = await getLists(username);
    const html = (0, render_1.default)(username, name, lists);
    res.status(200).send(html);
    // res.status(200).json({ id });
    // res.status(200).send(`<!doctype html>
    // <html>
    // <head> <meta charset="UTF-8"> <title>PATH: "${path}"</title> </head>
    // <body> <h1>PATH: "${path}"</h1> <h2>URL: "${url}"</h2> <h3>id: ${id}</h3> </body>
    // </html>`);
});
//# sourceMappingURL=index.js.map