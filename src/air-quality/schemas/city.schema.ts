import { Schema } from 'mongoose';

const CurrentSchema = new Schema({
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
});

const LocationSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});

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
    type: LocationSchema,
    required: true,
  },
  current: {
    type: CurrentSchema,
    required: true,
  },
});
