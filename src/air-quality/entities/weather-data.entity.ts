import { Column } from 'typeorm';

export class WeatherData {
  @Column()
  ts: string;

  @Column()
  tp: number;

  @Column()
  pr: number;

  @Column()
  hu: number;

  @Column()
  ws: number;

  @Column()
  wd: number;

  @Column()
  ic: string;

  constructor(ts: string, tp: number, pr: number, hu: number, ws: number, wd: number, ic: string) {
    this.ts = ts;
    this.tp = tp;
    this.pr = pr;
    this.hu = hu;
    this.ws = ws;
    this.wd = wd;
    this.ic = ic;
  }
}
