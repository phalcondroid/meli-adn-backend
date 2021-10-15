import { Module } from "@nestjs/common";
import { DnaManager } from "./dna.manager";
import { PrinterService } from "./services/printer.service";
import { DatabaseModule } from "src/database/database.module";
import { DnaController } from "./controllers/dna.controllers";
import { ValidatorService } from "./services/validator.service";
import { StringHelperService } from "./services/stringhelper.service";
import { statsProviders } from "./models/providers/stats.provider";
import { SaverService } from "./services/saver.service";
import { PresenterService } from "./services/presenter.service";
import { FinderService } from "./services/finder.service";
import { AuthModule } from "src/auth/auth.module";

@Module({
  imports: [
    DatabaseModule
  ],
  controllers: [
    DnaController
  ],
  providers: [
    DnaManager,
    SaverService,
    FinderService,
    DatabaseModule,
    PrinterService,
    PresenterService,
    ValidatorService,
    StringHelperService,
    ...statsProviders
  ]
})
export class DnaModule {}