import { Injectable } from "@nestjs/common";
import { SaverService } from "./saver.service";
import { StringHelperService } from "./stringhelper.service";

@Injectable()
export class ValidatorService {
  constructor(
    private readonly stringHelper: StringHelperService
  ) { }

  /**
   * Get all diagonals from matrix
   * @param dna
   * @returns 
   */
  public checkIsMutant(dna: string[]): boolean|null {
    let matches: number = 0;
    const dnaLen = dna.length;
    const lenIterator = dnaLen - 1; 
    for (let i = 0; i < dnaLen; i++) {
      let inc: number = i;
      let rows: string = "";
      let column: string = "";
      let diagonalRigthChain: string = "";
      let diagonalLeftChain: string = "";
      let diagonalRightReversed: string = "";
      let diagonalLeftReversed: string = "";

      for (let j = 0; j < dnaLen; j++) {
        const charValidation = this.checkChars(dna[i][j]);
        if (charValidation === false) {
          return null;
        }
        column += dna[j][i];
        rows += dna[i][j];
        if (typeof dna[j] !== "undefined" && typeof dna[j][inc] !== "undefined") {
          diagonalRigthChain += dna[j][inc];
        }
        if (typeof dna[inc] !== "undefined" && typeof dna[inc][j] !== "undefined") {
          if (inc != j) {
            diagonalLeftChain += dna[inc][j];
          }
        }
        if (typeof dna[lenIterator - j] !== "undefined" && typeof dna[lenIterator - j][inc] !== "undefined") {
          diagonalRightReversed += dna[lenIterator - j][inc];
        }
        if (typeof dna[lenIterator - inc] !== "undefined" && typeof dna[lenIterator - inc][j] !== "undefined") {
          if (inc != j) {
            diagonalLeftReversed += dna[lenIterator - inc][j];
          }
        }
        inc++;
      }
      matches += this.findSequenceMatches(rows, "row");
      if (matches > 1) return true;
      matches += this.findSequenceMatches(column, "col");
      if (matches > 1) return true;
      matches += this.findSequenceMatches(diagonalRigthChain, "right");
      if (matches > 1) return true;
      matches += this.findSequenceMatches(diagonalLeftChain, "left");
      if (matches > 1) return true;
      matches += this.findSequenceMatches(diagonalRightReversed, "rRight");
      if (matches > 1) return true;
      matches += this.findSequenceMatches(diagonalLeftReversed, "rLeft");
      if (matches > 1) return true;

      rows   = "";
      column = "";
      diagonalRigthChain = "";
      diagonalLeftChain  = "";
      diagonalRightReversed = "";
      diagonalLeftReversed  = "";
    }
    return false;
  }

  /**
   * 
   * @param char 
   * @returns 
   */
  private checkChars(char: string): boolean {
    var exist = true;
    const sequences = [/A/g, /C/g, /G/g, /T/g];
    for (let item of sequences) {
      if (char.match(item) === null) {
        return;
      }
    }
    return exist;
  }

  /**
   * Check row matches
   * @param row
   * @returns number
   */
  private findSequenceMatches(chain: string, name = "empty"): number {
    if (chain.length < 4) {
      return 0;
    }
    var matchesCounter = 0;
    const sequences = [/AAAA/g, /CCCC/g, /GGGG/g, /TTTT/g];
    sequences.forEach((item) => {
      matchesCounter += (chain.match(item) !== null) ? 1 : 0;
    });
    return matchesCounter;
  }
}