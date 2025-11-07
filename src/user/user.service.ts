import { Injectable } from "@nestjs/common";
import { UserDTO } from "./user.dto";

@Injectable()
export class UserService{
    getGreetings() : string{
        return "Welcome User";
    }

    getUserInfoByRequest(id:number, name:string, age:number, address:string) : object{
        return {
            id : id, 
            name : name, 
            age : age, 
            address : address
        };
    }

    getUserInforByQuery(id:number, name:string, age:number) : object {
        return {
            id : id,
            name : name,
            age : age
        };
    }

    getUserInforByPost(info : UserDTO) : object {
        return {
            id: info.id,
            name: info.name
        };
    }

    updateUserByPut(updateData : UserDTO) : object {
        return updateData;
    }

    updateUserByParam(id : number, partialUpdate : UserDTO) : object {
        if(id == 1){
            console.log(`Update is successfull for ID - ${id}`);
            return {
                id:id,
                name: partialUpdate.name,
                age: partialUpdate.age,
                address: partialUpdate.address
            }
        }
        else{
            console.log(`ID - ${id} is not found`);
            return {
                id: "empty",
                name: "empty",
                age: "empty",
                address: "empty",
                password: "empty"
            };
        }
    }

    updateUserByQuery(id : number, partialUpdate : UserDTO) : object {
        if(id == 1) {
            console.log(`Update is successfull for ID - ${id}`);
            return {
                id:id,
                name: partialUpdate.name,
                age: partialUpdate.age,
                address: partialUpdate.address
            }
        }
        else {
            console.log(`ID - ${id} is not found`);
            return {
                id: "empty",
                name: "empty",
                age: "empty",
                address: "empty",
            };
        }
    }

    updateUserByBody(id : number, partialUpdate : UserDTO) : object {
        if(id == 1) {
            console.log(`Update is successfull for ID - ${id}`);
            return {
                id:id,
                name: partialUpdate.name,
                age: partialUpdate.age,
                address: partialUpdate.address
            }
        }
        else {
            console.log(`ID - ${id} is not found`);
            return {
                id: "empty",
                name: "empty",
                age: "empty",
                address: "empty",
            };
        }
    }

    deleteUser(id : number) : string {
        if(id == 1){
            return `The user of ID - ${id} is deleted`;
        }
        else{
            return `The user of ID = ${id} is not found`;
        }
    }
}