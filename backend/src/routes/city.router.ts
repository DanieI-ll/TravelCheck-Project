import { Router } from 'express';

import {createCity, getAllCities, getCityById} from "../controllers/city.controller"

const cityRouter = Router();

cityRouter.post('/', createCity);
cityRouter.get('/', getAllCities);
cityRouter.get('/:id', getCityById);

export default cityRouter;