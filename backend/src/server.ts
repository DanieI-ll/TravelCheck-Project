import express, { Express } from "express";
import cors from "cors";

const startServer = (): void => {
  const app: Express = express();

  app.use(cors());
  app.use(express.json());

  const port: number = Number(process.env.PORT) || 3000;

  app.listen(port, () => console.log(`Server running on ${port} port`));
}

export default startServer;