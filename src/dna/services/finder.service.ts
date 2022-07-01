import { Inject, Injectable } from "@nestjs/common";
import { StatsModel } from "../models/entities/stats.model";

@Injectable()
export class FinderService {
  constructor(
    @Inject('STATS_REPOSITORY')
    private statsRepository: typeof StatsModel
  ) {}
  
  /**
   * Get all stats from database 
   * @returns StatsModel[]
   */
  public async getStats(): Promise<StatsModel[]> {
    return await this.statsRepository.findAll();
  }

  /**
   * Count stats by hashes.
   * @param string
   * @returns number
   */
   public async countByHash(hash: string): Promise<number> {
    return await this.statsRepository.count({
      where: {
        hash
      }
    });
  }
}