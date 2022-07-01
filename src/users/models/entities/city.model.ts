import {
  Table,
  Column,
  Model,
  PrimaryKey,
  AutoIncrement,
} from 'sequelize-typescript';

@Table({
  underscored: true,
  tableName: 'meli_cities',
})
export class CityModel extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;
  @Column
  name: string;

  @Column
  userId: number;

  @Column
  phone: string;

  @Column
  createdAt: Date;
}
