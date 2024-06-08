import { onRequest } from "firebase-functions/v2/https";
import { log } from "firebase-functions/logger";
import { initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import renderPage from "./render";
import type { List } from "./types";

initializeApp();
const firestore = getFirestore();
const usersDB = firestore.collection("users");
const listsDB = firestore.collection("lists");

const cors = "all-my-favs.web.app";
// const cors = true;

type User = {
  id: string;
  uid: string;
  name: string;
};

async function getUser(id: string) {
  const doc = await usersDB.doc(id).get();
  if (!doc.exists) return false;
  return { id: doc.id, ...doc.data() } as User;
}
async function getLists(username: string): Promise<List[]> {
  const snapshot = await listsDB.where("username", "==", username).get();
  if (snapshot.empty) return [];
  return snapshot.docs.map((doc) => doc.data() as List);
}

export const profile = onRequest({ cors }, async (req, res) => {
  log("profile invoked");
  if (
    req.method === "PUT" ||
    req.method === "POST" ||
    req.method === "DELETE"
  ) {
    res.status(403).send("Forbidden");
    return;
  }
  const { path, url } = req;
  log(`path: "${path}"`);
  log(`url: "${url}"`);
  log("200 success");
  if (path.length <= 1) {
    log("no username");
    res.redirect("/");
    return;
  }
  const username = path.slice(1);
  const user = await getUser(username);
  if (!user) {
    log("404 not found");
    res.status(404).json({ message: "Not found", username });
    return;
  }
  const lists = await getLists(username);
  const html = renderPage(username, user.name, lists);
  res.status(200).send(html);
});
