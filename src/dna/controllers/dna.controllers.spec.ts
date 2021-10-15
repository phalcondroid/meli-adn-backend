import { Test, TestingModule } from '@nestjs/testing';
import { DnaManager } from '../dna.manager';
import { DnaController } from './dna.controllers';

describe('AppController', () => {
  let dnaController: DnaController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DnaController],
      providers: [DnaManager],
    }).compile();

    dnaController = app.get<DnaController>(DnaController);
  });

  describe('check mutant', () => {
    it('check is a mutant', () => {
      expect(dnaController.checkMutant({
        dna: [
          "TTGCGA",
          "CTGTGC",
          "TTATGT",
          "AGAAAG",
          "CCCCTA",
          "TCACTG"
        ]
      })).toBe({
        "isMutant": false
      });
    });
  });

  describe('check stats', () => {
    it('stats', () => {
      expect(dnaController.getStats()).toBe({
        "count_human_dna": 2,
        "count_mutant_dna": 3,
        "ratio": 1.5
      });
    });
  });
});
