import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { CreateTaskDto } from "./CreateTaskDto"
import { Task } from "./tasks.model"

@Controller( "/tasks" )
export class TasksController {
    constructor( private readonly tasksService: TasksService ) {
    }

    @Get( ":id" )
    getTask( @Param( "id" ) id: string ): Promise<Task> {
        return this.tasksService.getTask( id )
    }

    @Get()
    getTasks(): Promise<Task[]> {
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
