import { IsString, IsNumber, IsBoolean, IsUrl, IsOptional, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class OsDTO {
    @IsBoolean()
    android: boolean;

    @IsBoolean()
    ios: boolean;

    @IsBoolean()
    web: boolean;
}

class OfferDTO {
    @IsNumber()
    campaign_id: string;

    @IsString()
    icon: string;


    @IsString()
    name: string;

    @IsString()
    tracking_url: string;


    @IsString()
    instructions: string;


    @IsString()
    description: string;
}

export class Offer2DTO {
    // @ValidateNested()
    // @Type(() => OfferDTO)
    // offers: OfferDTO[]
    // Offer: { [key: string]: OfferDTO };

    // @IsString()
    // status: string;

    @ValidateNested()
    @Type(() => OfferDTO)
    Offer: OfferDTO

    @ValidateNested()
    @Type(() => OsDTO)
    OS: OsDTO
}
