import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CurrentAirQuality } from './current-air-quality.entity';
import { Location } from './location.entity';
import { isDefined } from "class-validator";

@Entity()
export class AirQuality {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  city: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column(type => Location)
  location: Location;

  @Column(type => CurrentAirQuality)
  current: CurrentAirQuality;

  constructor(city: string, state: string, country: string, location: Location, current: CurrentAirQuality) {
    this.city = city;
    this.state = state;
    this.country = country;
    if(isDefined(location)){
    //  this.location.coordinateX = location.coordinates[0];
    //  this.location.coordinateY = location.coordinates[1];

    }
    this.current = current;
  }
}
