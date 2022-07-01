import { Injectable } from "@nestjs/common";
import crypto = require('crypto');

@Injectable()
export class StringHelperService {

  /**
   * Reverse string
   * @param val string
   * @return string
   */
  public reverse(val: string): string {
    return val.split("").reverse().join("");
  }

  /**
   * Encrypt text.
   * @return string
   */
  public async hashString(data: string): Promise<string> {
    return crypto.createHash('md5').update(data).digest("hex");         
  }
}