import { UsersModel } from "../entities/users.model";

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: UsersModel,
  },
];