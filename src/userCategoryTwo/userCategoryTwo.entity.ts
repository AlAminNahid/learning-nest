import { IsOptional } from "class-validator";
import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";

@Entity('CategoryTwo')
export class UserCategoryTwoEntity{
    @PrimaryColumn({
        unique : true
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

    @BeforeInsert()
    generateID(){
        this.id = Math.floor(Math.random() * 1000);
    }
}