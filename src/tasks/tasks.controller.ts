import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { ITask } from "./ITask"
import { CreateTaskDto } from "./CreateTaskDto"

@Controller( "/tasks" )
export class TasksController {
    constructor( private readonly tasksService: TasksService ) {
    }

    @Get( ":id" )
    getTask( @Param( "id" ) id: string ): ITask {
        return this.tasksService.getTask( id )
    }

    @Get()
    getTasks(): ITask[] {
        return this.tasksService.getTasks()
    }

    @Post()
    createTask( @Body() createTaskDto: CreateTaskDto ) {
        return this.tasksService.createTask( createTaskDto )
    }

    @Delete( ":id" )
    removeTask( @Param( "id" ) id: string ) {
        return this.tasksService.removeTask( id )
    }
}
