import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, HydratedDocument } from 'mongoose';



export type AirQualityDocument =
  HydratedDocument<AirQuality>;

@Schema()
export class AirQuality extends Document  {

  @Prop({ type: String, required: true })
  city: string;

  @Prop({ type: String, required: true })
  state: string;

  @Prop({ type: String, required: true })
  country: string;

  @Prop({
    type: {
      type: String,
      coordinateX: Number,
      coordinateY: Number,
    }
  })
  location: {
    type: string;
    coordinateX: number;
    coordinateY: number;
  };
  @Prop({
    type: {
      ts: Date,
      aqius: Number,
      mainus: String,
      aqicn: Number,
      maincn: String,
    }
  })
  pollution: {
    ts: Date,
    aqius: number,
    mainus: string,
    aqicn: number,
    maincn: string,
  };

  @Prop({
    type: {
      ts: Date,
      tp: Number,
      pr: Number,
      hu: Number,
      ws: Number,
      wd: Number,
      ic: String,
    }
  })
  weather: {
    ts: Date,
    tp: number,
    pr: number,
    hu: number,
    ws: number,
    wd: number,
    ic: string,
  };

}



export const AirQualitySchema = SchemaFactory.createForClass(AirQuality);
