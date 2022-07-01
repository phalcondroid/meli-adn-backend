import { CityModel } from '../entities/city.model';
import { UsersModel } from '../entities/users.model';

export const usersProviders = [
  {
    provide: 'USERS_REPOSITORY',
    useValue: UsersModel,
  },
];

export const cityProviders = [
  {
    provide: 'CITY_REPOSITORY',
    useValue: CityModel,
  },
];
