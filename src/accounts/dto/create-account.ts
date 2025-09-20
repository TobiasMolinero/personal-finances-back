import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateAccountDto {

    @IsString({ message: 'El nombre debe ser un texto.' })
    @IsNotEmpty({ message: 'El nombre es obligatorio' })
    name: string;

    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El balance debe ser un número.' })
    @IsNotEmpty({ message: 'El balance es obligatorio.' })
    balance: number
}