import { Injectable } from "@nestjs/common";
import { DnaContentResponse } from "../interfaces/response/dna-content.response";
import { StatsModel } from "../models/entities/stats.model";
import { FinderService } from "./finder.service";

@Injectable()
export class PresenterService {
  constructor(
    private readonly finder: FinderService
  ) {}

  /**
   * Get stats human response.
   * @returns DnaContentResponse
   */
  public async getStats(): Promise<DnaContentResponse> {
    const stats: StatsModel[] = await this.finder.getStats();
    let countHumans = 0;
    let countMutant = 0;
    for (const item of stats) {
      if (item.mutant === 1) {
        countMutant++;
      } else {
        countHumans++;
      }
    }
    return {
      count_human_dna: countHumans,
      count_mutant_dna: countMutant,
      ratio: (countHumans > 0 && countMutant > 0) ? (countMutant / countHumans): 0
    };
  }
}