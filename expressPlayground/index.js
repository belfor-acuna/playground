import express from 'express';
import {PORT} from "./config/environment.js";

import nodemailerRoutes from "./routes/nodemailerRoutes.js";
import testRoutes from "./routes/testRoutes.js";
import cors from 'cors';
const app = express();

app.use(express.json());
const corsOptions = {
  origin: "https://belfor-acuna-portfolio.onrender.com", 
  methods: ["GET", "POST"], 
  allowedHeaders: ["Content-Type"],
};

app.use(cors(corsOptions)); // Usar CORS con la configuración personalizada
app.use(cors());
app.use("/mail", nodemailerRoutes);
app.use("/testexpress", testRoutes);
app.listen(PORT, () => {
    console.log("Holi")
  console.log(`Server running on port ${PORT}`);
});