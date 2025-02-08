import dotenv from "dotenv";
dotenv.config();

const MAIL = process.env.MAIL;
const PASSWORD = process.env.PASSWORD;
const PORT = process.env.PORT;

export {MAIL, PASSWORD, PORT};