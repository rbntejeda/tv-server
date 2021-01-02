import * as dotenv from "dotenv";
dotenv.config();

import express from 'express';
import * as bodyParser from "body-parser";
const app = express();
app.use(bodyParser.json());

const PORT = 3000;
app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});