import { Schema } from 'mongoose';

export const LocationSchema = new Schema({
  type: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
});
