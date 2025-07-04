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

// await City.create({
//   name: 'Köln',
//   topPlaces: [
//     {
//       name: 'Kölner Dom',
//       description: "Gotik tarzda inşa edilmiş, Almanya'nın en büyük katedrali.",
//     },
//     {
//       name: 'Rheinpark',
//       description: 'Ren Nehri kıyısında geniş bir park alanı, dinlenmek için ideal.',
//     },
//     {
//       name: 'Ludwig Müzesi',
//       description: 'Modern sanat koleksiyonlarıyla ünlü müze.',
//     },
//   ],
// });