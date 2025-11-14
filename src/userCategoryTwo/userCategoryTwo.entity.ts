import { IsOptional } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('CategoryTwo')
export class UserCategoryTwoEntity{
    @PrimaryGeneratedColumn({
        type : "int"
    })
    id : number;

    @IsOptional()
    @Column({
        type : "enum",
        enum : [true, false],
        default : true
    })
    isActive : boolean;

    @Column({
        type : "varchar",
        nullable : true
    })
    fullName : string;

    @Column({
        type : "bigint",
        unsigned : true
    })
    phone : number;
}