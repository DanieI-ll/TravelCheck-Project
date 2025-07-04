import { Request, Response, NextFunction } from 'express';
import * as cityService from '../services/city.service';

export const createCity = async (req: Request, res: Response) => {
  try {
    const city = await cityService.createCity(req.body);
    res.status(201).json(city);
  } catch (error) {
    res.status(500).json({ message: 'Error', error });
  }
};

export const getAllCities = async (_req: Request, res: Response) => {
  try {
    const cities = await cityService.getAllCities();
    res.status(200).json(cities);
  } catch (error) {
    res.status(500).json({ message: 'Error', error });
  }
};

export const getCityById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { id } = req.params;
    const city = await cityService.getCityById(id);

    if (!city) {
      res.status(404).json({ message: 'Error' }); //return
    }

    res.status(200).json(city);
  } catch (error) {
    next(error);
  }
};
