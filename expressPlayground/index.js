import express from 'express';
import {PORT} from "./config/environment.js";
const app = express();
app.listen(port, () => {
    console.log("Holi")
  console.log(`Server running on port ${PORT}`);
});