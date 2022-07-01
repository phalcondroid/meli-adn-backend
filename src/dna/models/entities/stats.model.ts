import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  underscored: true,
  tableName: "meli_stats"
})
export class StatsModel extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;
  
  @Column
  dna: string;

  @Column
  hash: string;

  @Column
  mutant: number;

  @Column
  status: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}