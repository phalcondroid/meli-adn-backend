import { UsersModel } from 'src/users/models/entities/users.model';

export interface StartSessionResponse {
  access_token: string;
  user: UsersModel;
}
