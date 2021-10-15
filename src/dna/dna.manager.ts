import { Injectable } from "@nestjs/common";
import { SaverService } from "./services/saver.service";
import { PrinterService } from "./services/printer.service";
import { PresenterService } from "./services/presenter.service";
import { ValidatorService } from "./services/validator.service";
import { DnaContentResponse } from "./interfaces/response/dna-content.response";

@Injectable()
export class DnaManager {
  constructor(
    private readonly saver: SaverService,
    private readonly presenter: PresenterService,
    private readonly printer: PrinterService,
    private readonly validator: ValidatorService
  ) { }
  
  /**
   * Check if is a mutant
   * @param string[]
   * @returns 
   */
  public async checkIsMutant(dna: string[]): Promise<boolean| null> {
    const isMutant = await this.validator.checkIsMutant(dna)
    this.saver.saveStat(dna, isMutant);
    return isMutant;
  }

  /**
   * Get stats
   * @return DnaContentResponse
   */
  public async getStats(): Promise<DnaContentResponse> {
    return this.presenter.getStats();
  }

  /**
   * Print mutant table
   */
  public async getBox(dna: string[]): Promise<string> {
    return this.printer.getBoxToPrint(dna);
  }
}