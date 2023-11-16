import { DEVICE, PLATFORM } from "../constants";

export function parseSource1Data(offer) {
    return {
        name: offer.offer_name,
        // slug: offer.,
        description: offer.offer_desc,
        requirements: offer.call_to_action,
        thumbnail: offer.image_url,
        isDesktop: offer.platform === PLATFORM.DESKTOP,
        isAndroid: offer.platform === PLATFORM.MOBILE && offer.device !== DEVICE.IOS,
        isIos: offer.platform === PLATFORM.MOBILE && offer.device === DEVICE.IOS,
        offerUrlTemplate: offer.offer_url,
        providerName: "offer1",
        externalOfferId: offer.offer_id
    };
}