import { Table, Column, Model, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  underscored: true,
  tableName: "meli_users"
})
export class UsersModel extends Model {

  @PrimaryKey
  @AutoIncrement
  @Column
  public id: number;
  
  @Column
  username: string;

  @Column
  password: string;

  @Column
  status: number;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}