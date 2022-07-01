import { Inject, Injectable } from "@nestjs/common";
import { count } from "console";
import { StatsModel } from "../models/entities/stats.model";
import { FinderService } from "./finder.service";
import { StringHelperService } from "./stringhelper.service";

@Injectable()
export class SaverService {
  constructor(
    @Inject('STATS_REPOSITORY')
    private statsRepository: typeof StatsModel,
    private readonly finder: FinderService,
    private readonly helper: StringHelperService
  ) {}
  
  /**
   * Save stat model in database
   * @param stat StatsModel
   * @param isMutant boolean
   * @returns 
   */
  public async saveStat(dna: string[], isMutant: boolean): Promise<StatsModel|null> {
    const dnaText = dna.join(",");
    const hash = await this.helper.hashString(dnaText);
    const ifExist = await this.finder.countByHash(hash);
    if (ifExist) {
      return;
    }
    const mutant = (isMutant) ? 1 : 0;
    const model: StatsModel = await this.statsRepository.create({
      dna: dnaText,
      hash,
      mutant,
      status: 1
    });
    return model.get({ plain: true });
  }
}