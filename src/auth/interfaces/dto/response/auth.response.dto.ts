import { IsNotEmpty, IsObject } from 'class-validator';
import { StartSessionResponse } from '../../validations/startsession-response.interface';

export class LoginResponseDto {
  @IsNotEmpty()
  @IsObject()
  response: StartSessionResponse;
}