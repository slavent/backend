import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { UsersService } from "./users.service"
import { IUser } from "./IUser"
import { CreateUserDto } from "./CreateUserDto"

@Controller( "/users" )
export class UsersController {
    constructor( private readonly usersService: UsersService ) {
    }

    @Get( ":id" )
    getUser( @Param( "id" ) id: string ): IUser {
        return this.usersService.getUser( id )
    }

    @Get()
    getUsers(): IUser[] {
        return this.usersService.getUsers()
    }

    @Post()
    createUser( @Body() createUserDto: CreateUserDto ) {
        return this.usersService.createUser( createUserDto )
    }

    @Delete( ":id" )
    removeUser( @Param( "id" ) id: string ) {
        return this.usersService.removeUser( id )
    }
}
