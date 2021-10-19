import { AllowNull, Column, Table } from "sequelize-typescript";
import { Entity } from "./abstraction/entity";

@Table({
    tableName: 'Users',
    timestamps: false
})
export class User extends Entity<User> {

    @AllowNull(false)
    @Column
    public name: string;

    @AllowNull(false)
    @Column
    public username: string;

    @AllowNull(false)
    @Column
    public password: string;
}