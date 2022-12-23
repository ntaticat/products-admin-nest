import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsDecimal,
  IsInt,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @ApiProperty()
  @IsString()
  @MinLength(1)
  name: string;
  @ApiProperty()
  @IsString()
  @IsOptional()
  description: string;
  @ApiProperty()
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'price must have max two decimal places' },
  )
  @IsOptional()
  @IsPositive()
  price: number;
  @ApiProperty()
  @IsInt()
  @IsOptional()
  @Min(0)
  stock: number;
  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  available: boolean;
}
