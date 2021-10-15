import { Body, Controller, ForbiddenException, Get, HttpStatus, Post, Res, UseGuards } from "@nestjs/common";
import { JwtAuthGuard } from "src/shared/guards/jwt-auth.guard";
import { DnaManager } from "../dna.manager";
import { DnaRequestDto } from "../interfaces/request/dna.request.dto";
import { DnaContentResponse } from "../interfaces/response/dna-content.response";

@Controller('mutant')
export class DnaController {
  constructor(
    private readonly manager: DnaManager
  ) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  public async checkMutant(@Body() dnaDto: DnaRequestDto): Promise<any> {
    const isMutant = await this.manager.checkIsMutant(dnaDto.dna);
    if (!isMutant) {
      throw new ForbiddenException();
    }
    return {
      "isMutant": isMutant
    };
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  public async getStats(): Promise<DnaContentResponse> {
    return await this.manager.getStats();
  }
}