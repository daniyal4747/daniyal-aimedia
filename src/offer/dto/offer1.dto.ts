import { IsString, IsNumber, IsArray, ValidateNested, IsBoolean, IsUrl, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class Offer1DTO {
    @IsString()
    offer_id: string;

    @IsString()
    offer_name: string;

    @IsString()
    offer_desc: string;

    @IsString()
    call_to_action: string;

    @IsString()
    offer_url: string;

    @IsString()
    image_url: string;

    @IsString()
    platform: string;

    @IsString()
    device: string;

}

// export class Offer1DTO {
//     @IsString()
//     currency_name: string;

//     @IsNumber()
//     offers_count: number;

//     @IsArray()
//     @ValidateNested()
//     @Type(() => Offer1DTO)
//     offers: Offer[];
// }
