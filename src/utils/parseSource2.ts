export function parseSource2Data({Offer, OS}) {
    return {
        name: Offer.name,
        description: Offer.description,
        requirements: Offer.instructions,
        thumbnail: Offer.icon,
        isDesktop: OS.web,
        isAndroid: OS.android,
        isIos: OS.ios,
        offerUrlTemplate: Offer.tracking_url,
        providerName: "offer2",
        externalOfferId: Offer.campaign_id
    };
}