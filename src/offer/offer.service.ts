import { Injectable, Logger } from '@nestjs/common';
import { validate } from 'class-validator';
import { SOURCE } from '../constants/source';
import { parseSource1Data, parseSource2Data } from '../utils';
import { Offer } from './entities/offer.entity';

@Injectable()
export class OfferService {
  private readonly logger = new Logger(OfferService.name);


  async processData(offer, dto, source) {
    const validationErrors = await validate(Object.assign(new dto(), offer));
    if (validationErrors.length === 0) {
      // Data is valid, create and save entity object
      const offerEntityObjects: Offer = this.mapResponseToEntity(offer, source);
      console.log('>> offerEntityObjects', offerEntityObjects);

    } else {
      // Handle validation errors
      this.logger.error('Validation Errors:', validationErrors);
    }
  }
  

  private mapResponseToEntity(offer, source): any {
    // Map properties from response to entity object
    // Implement this based on the actual structure of your entities
    let offerEntityObjects = [];

    if (source === SOURCE.ONE) {
      const offerEntity = parseSource1Data(offer);
      offerEntityObjects.push(offerEntity)

    } else if (source === SOURCE.TWO) {
      const offerEntity = parseSource2Data(offer);
      offerEntityObjects.push(offerEntity)

    }
    return offerEntityObjects;
  }

}
