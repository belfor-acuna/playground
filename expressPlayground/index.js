import express from 'express';
import {PORT} from "./config/environment.js";

import nodemailerRoutes from "./routes/nodemailerRoutes.js";
import testRoutes from "./routes/testRoutes.js";

const app = express();
app.use(express.json());

app.use("/mail", nodemailerRoutes);
app.use("/test", testRoutes);
app.listen(PORT, () => {
    console.log("Holi")
  console.log(`Server running on port ${PORT}`);
});