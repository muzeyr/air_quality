import { Column } from 'typeorm';

export class Location {
  @Column()
  type: string;

  @Column('float', )
  coordinateX: number;

  @Column('float', )
  coordinateY: number;

  coordinates: number[];

  constructor(type: string, coordinateX: number,coordinateY: number) {
    this.type = type;
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
  }
}
