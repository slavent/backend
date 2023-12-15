import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { ITask } from "./ITask"
import { CreateTaskDto } from "./CreateTaskDto"

@Controller( "/tasks" )
export class TasksController {
    constructor( private readonly tasksService: TasksService ) {
    }

    @Get( ":id" )
    getUser( @Param( "id" ) id: string ): ITask {
        return this.tasksService.getTask( id )
    }

    @Get()
    getUsers(): ITask[] {
        return this.tasksService.getTasks()
    }

    @Post()
    createUser( @Body() createTaskDto: CreateTaskDto ) {
        return this.tasksService.createTask( createTaskDto )
    }

    @Delete( ":id" )
    removeUser( @Param( "id" ) id: string ) {
        return this.tasksService.removeTask( id )
    }
}
