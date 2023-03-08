import { model, Model, Schema } from 'mongoose';
import { CityDocument } from "./interfaces/city.interface";


export const CitySchema = new Schema({
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
  current: {
    pollution: {
      ts: Date,
      aqius: Number,
      mainus: String,
      aqicn: Number,
      maincn: String,
    },
    weather: {
      ts: Date,
      tp: Number,
      pr: Number,
      hu: Number,
      ws: Number,
      wd: Number,
      ic: String,
    },
  },
});

export const CityModel: Model<CityDocument> = model<CityDocument>('City', CitySchema);
