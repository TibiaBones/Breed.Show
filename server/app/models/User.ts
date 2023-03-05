import {Table, Column, Model} from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @Column
  first_name: string;
  @Column
  last_name: string;
  @Column
  login: string;
  @Column
  email: string;
  @Column
  password: string;
}
