import { IsArray, IsNotEmpty } from 'class-validator';

export class DnaRequestDto {
  @IsNotEmpty()
  @IsArray()
  dna: string[];
}