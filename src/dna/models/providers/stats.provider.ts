import { StatsModel } from "../entities/stats.model";

export const statsProviders = [
  {
    provide: 'STATS_REPOSITORY',
    useValue: StatsModel,
  },
];