import express from 'express';
import taskRoutes from './src/test/routes.js'
// import cors from "cors";
// require('dotenv').config();

// const cors = require('cors');



const app = express();
const port = 3333

app.use(express.json())

// app.use(cors({ origin: 'http://localhost:3000' }));

app.use('/api/v1/test', taskRoutes)

app.listen(port, () => console.log(port))