import { Column, Entity, PrimaryColumn, Unique } from "typeorm";

@Entity('CategoryOne')
export class UserCategoryOneEntity{
    @PrimaryColumn({
        type : "int",
        unsigned : true,
        unique : true,
    })
    id : number;

    @Column({
        type : "varchar",
        length : 100
    })
    fullName : string;

    @Column({
        type : "int",
        unsigned : true
    })
    age : number;

    @Column({
        type : "enum",
        enum : ["active", "inactive"],
        default : "active"
    })
    status : string;
}