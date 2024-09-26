// app.ts
import express from "express";
import indexRoutes from './routes/index';

const app = express();
app.use(indexRoutes);
app.use(express.json());

app.listen(process.env.PORT || 3000);
