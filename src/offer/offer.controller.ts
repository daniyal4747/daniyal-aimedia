import { Interval } from '@nestjs/schedule';
import { Controller, Logger } from '@nestjs/common';
import { OfferService } from './offer.service';
import { payload as payload1 } from './payload/offer1.payload';
import { payload as payload2 } from './payload/offer2.payload';
import { SOURCE } from '../constants/source';
import { Offer2DTO } from './dto/offer2.dto';
import { Offer1DTO } from './dto/offer1.dto';


@Controller('offer')
export class OfferController {
  private readonly logger = new Logger(OfferService.name);

  constructor(private readonly offerService: OfferService) { }

  @Interval(10000)
  async cronForOffers() {
    try {
      const fetchedResponses = [
        {
          source: SOURCE.ONE,
          payload: payload1
        },
        {
          source: SOURCE.TWO,
          payload: payload2
        }
      ];

      fetchedResponses.forEach((offerResp) => {

        if (offerResp.source === SOURCE.ONE) {
          this.handleSource1Response(offerResp);

        } else if (offerResp.source === SOURCE.TWO) {
          this.handleSource2Response(offerResp);

        }
      })

    } catch (error) {
      this.logger.error(error)
    }
  }

  async handleSource1Response(offerResp) {
    const offers = offerResp.payload?.response?.offers;

    offers.map(async (offer) => {
      this.offerService.processData(offer, Offer1DTO, offerResp.source);
    })

  }

  async handleSource2Response(offerResp) {
    let data = offerResp.payload.data;
    for (const key in data) {
      let offer = data[key];
      this.offerService.processData(offer, Offer2DTO, offerResp.source);
    }
  }
}