import { Injectable } from "@nestjs/common"
import { CreateUserDto } from "./CreateUserDto"
import { InjectModel } from "@nestjs/sequelize"
import { User } from "./users.model"

@Injectable()
export class UsersService {
    constructor( @InjectModel( User ) private userRepo: typeof User ) {
    }

    async getUser( userId: string ): Promise<User> {
        return await this.userRepo.findByPk( userId )
    }

    async getUsers(): Promise<User[]> {
        return await this.userRepo.findAll()
    }

    async createUser( dto: CreateUserDto ) {
        return await this.userRepo.create( dto )
    }

    async removeUser( userId: string ) {
        return await this.userRepo.destroy( {
            where: {
                id: userId
            }
        } )
    }
}
