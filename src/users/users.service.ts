import { Injectable } from "@nestjs/common"
import { IUser } from "./IUser"
import { CreateUserDto } from "./CreateUserDto"

@Injectable()
export class UsersService {
    getUser(userId: string): IUser {
        return {
            name: "test",
            login: "test"
        }
    }

    getUsers(): IUser[] {
        return [
            {
                name: "test",
                login: "test"
            },
            {
                name: "test",
                login: "test"
            }
        ]
    }

    createUser( user: CreateUserDto ) {
        console.log(user)
    }

    removeUser( userId: string ) {
        console.log(userId)
    }
}
