import { Module } from '@nestjs/common';
import { CronService } from './cron.service';
import AppConfigModule from "../config/app/configuration.module";
import { QueuesModule } from "../queues/queues.module";

@Module({
  imports: [
    AppConfigModule,
    CronModule,
    QueuesModule
  ],
  providers: [CronService],
})
export class CronModule {}
