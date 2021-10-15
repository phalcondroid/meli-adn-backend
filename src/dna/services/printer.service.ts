import { Injectable } from "@nestjs/common";

@Injectable()
export class PrinterService {

  /**
   * Print box in console
   * @param dna 
   * @returns string
   */
   public getBoxToPrint(dna: string[]): string {
    let box: string = "";
    box = "  -   -   -   -   -   -  \n";
    for (let i = 0; i < dna.length; i++) {
      const row = dna[i];
      box += "| ";
      for (let j = 0; j < dna[i].length; j++) {
        const column = row[j];
        box += column + " | ";
      }
      box += "\n";
      box += "  -   -   -   -   -   -  \n";
    }
    return box;
  }
}