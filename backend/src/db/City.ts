import { Schema, model } from 'mongoose';

const citySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    image: { type: String, required: true },
    topPlaces: [
      {
        name: {
          type: String,
          required: true,
        },

        description: {
          type: String,
          required: true,
        },

        image: { type: String, required: true },
      },
    ],
  },
  { versionKey: false, timestamps: true },
);

const City = model('city', citySchema);

export default City;
