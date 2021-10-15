import { Injectable } from "@nestjs/common";
import { FinderService } from "./services/finder.service";
import { UsersModel } from "./models/entities/users.model";

@Injectable()
export class UsersManager {
  constructor(
    private readonly finder: FinderService
  ) {}
  
  /**
   * Get user by username
   * @param username string
   * @returns UsersModel
   */
  public async getUserByUsername(username: string): Promise<UsersModel> {
    return await this.finder.getUserByUsername(username);
  }

  /**
   * Get user by pk
   * @param userId number
   * @returns UsersModel
   */
  public async getUserById(usersId: number): Promise<UsersModel> {
    return await this.finder.getUserByUserId(usersId);
  }
}