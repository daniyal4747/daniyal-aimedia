import { Module } from '@nestjs/common';
import { OfferModule } from './offer/offer.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    OfferModule
  ],
})
export class AppModule {}
