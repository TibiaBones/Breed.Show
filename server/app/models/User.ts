import {
  Table,
  Column,
  Model,
  DataType,
  AllowNull,
  Index,
  Default,
} from "sequelize-typescript";

@Table
export class User extends Model<User> {
  @Column
  first_name: string;
  @Column
  last_name: string;

  @AllowNull(false)
  @Index({ type: "UNIQUE" })
  @Column
  login: string;

  @AllowNull(false)
  @Index({ type: "UNIQUE" })
  @Column
  email: string;

  @AllowNull(false)
  @Column
  password: string;

  @AllowNull(false)
  @Default("lover")
  @Column(DataType.ENUM({ values: ["breeder", "lover"] }))
  public profile_status: string;

  @Column
  city: string;

  @Column
  location: string;

  @Column(DataType.BLOB("long"))
  avatar: Buffer;
}
