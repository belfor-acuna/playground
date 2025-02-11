import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT;
const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;
const REDIRECT_URI = process.env.REDIRECT_URI;
const REFRESH_TOKEN = process.env.REFRESH_TOKEN;
const MY_EMAIL = process.env.MY_EMAIL;

export {PORT, CLIENT_ID, CLIENT_SECRET, REDIRECT_URI, REFRESH_TOKEN, MY_EMAIL};