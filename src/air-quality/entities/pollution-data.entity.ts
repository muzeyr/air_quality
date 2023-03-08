import { Column } from 'typeorm';

export class PollutionData {
  @Column()
  ts: string;

  @Column()
  aqius: number;

  @Column()
  mainus: string;

  @Column()
  aqicn: number;

  @Column()
  maincn: string;

  constructor(ts: string, aqius: number, mainus: string, aqicn: number, maincn: string) {
    this.ts = ts;
    this.aqius = aqius;
    this.mainus = mainus;
    this.aqicn = aqicn;
    this.maincn = maincn;
  }
}
