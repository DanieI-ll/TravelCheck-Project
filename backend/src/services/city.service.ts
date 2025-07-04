import City from '../db/City';

export const createCity = async (data: any) => {
  return await City.create(data);
};

export const getAllCities = async () => {
  return await City.find();
};

export const getCityById = async (id: string) => {
  return await City.findById(id);
};