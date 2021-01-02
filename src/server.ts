import * as dotenv from "dotenv";
dotenv.config();
import express from 'express';
import * as bodyParser from "body-parser";
import routing from "./controllers";
import { db } from "./models";

const app = express();
app.use(bodyParser.json());

app.use('/api', routing);

const PORT = 3000;
// app.get('/', (req, res) => res.send('Express + TypeScript Server'));
app.listen(PORT, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("conection successful")
});