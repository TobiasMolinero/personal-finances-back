import { IsNotEmpty, IsNumber, IsString } from "class-validator"

export class CreateCategoryDto {
    
    @IsString({ message: 'El nombre de la categoría deber ser un texto.'})
    @IsNotEmpty({ message: 'El nombre de la categoría no debe estar vacío.'})
    category: string
    
    @IsNumber({ maxDecimalPlaces: 0}, { message: 'El idType debe ser un número entero.'})
    @IsNotEmpty({ message: 'El idType no debe estar vacío.'})
    idType: number
}
