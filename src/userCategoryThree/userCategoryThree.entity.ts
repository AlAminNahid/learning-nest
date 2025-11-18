import { Column, Entity, PrimaryColumn } from "typeorm";
import { BeforeInsert } from "typeorm";

@Entity('CategoryThree')
export class UserCategoryThreeEntity{
    @PrimaryColumn()
    id : number;

    @Column({
        type : "varchar",
        length : 100,
        unique : true
    })
    userName : string

    @Column({
        type : "varchar",
        length : 150
    })
    fullName : string;

    @Column({
        type : "enum",
        enum : [true, false],
        default : false
    })
    isActive : boolean;

    @BeforeInsert()
    generateID() {
        this.id = Math.floor(Math.random() * 1000);
    }
}