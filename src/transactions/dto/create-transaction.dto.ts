import { IsNumber, IsNotEmpty, IsString, IsDate } from "class-validator";
import { Type } from "class-transformer";

export class CreateTransactionDto {

    @IsNumber({ maxDecimalPlaces: 0 }, { message: 'El id de la cuenta debe ser un número entero.' })
    @IsNotEmpty({ message: 'El id de la cuenta es obligatorio.' })
    id_account: number

    @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El monto debe ser un número' })
    @IsNotEmpty({ message: 'El monto es obligatorio.'})
    amount: number
    
    @IsNumber({ maxDecimalPlaces: 0 }, { message: 'El id de la categoria deber ser un número entero.' })
    @IsNotEmpty({ message: 'El id de la categoria es obligatorio.' })
    id_category: number

    @IsString({ message: 'La descripción debe ser una cadena de texto.' })
    description?: string

    @IsDate({ message: 'La fecha debe tener un formato de fecha válido.' })
    @Type(() => Date)
    @IsNotEmpty({ message: 'La fecha es obligatoria' })
    date: Date
}
