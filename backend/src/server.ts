import express, { Express } from "express";
import cors from "cors";

import cityRouter from "./routes/city.router";

const startServer = (): void => {
  const app: Express = express();

  app.use(cors());
  app.use(express.json());

  app.use("/api/cities", cityRouter);

  const port: number = Number(process.env.PORT) || 3000;

  app.listen(port, () => console.log(`Server running on ${port} port`));
}

export default startServer;