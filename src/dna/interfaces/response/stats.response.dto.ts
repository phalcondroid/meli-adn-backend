import { IsNotEmpty, IsObject } from 'class-validator';
import { DnaContentResponse } from './dna-content.response';

export class StatsResponseDto {
  @IsNotEmpty()
  dna: DnaContentResponse;
}