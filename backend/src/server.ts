import express from "express";
import cors from "cors";

const startServer = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());
}