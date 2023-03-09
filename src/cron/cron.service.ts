import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class CronService   {
  private readonly logger: Logger = new Logger(this.constructor.name);

  constructor(
    ) {
  }

}
