import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('userTwo')
export class UserTwoEntity{
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    email : string;
    
    @Column()
    password : string;

    @Column()
    gender : string;

    @Column()
    phoneNumber : string;
}