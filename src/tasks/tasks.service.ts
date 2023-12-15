import { Injectable } from "@nestjs/common"
import { CreateTaskDto } from "./CreateTaskDto"
import { Task } from "./tasks.model"
import { InjectModel } from "@nestjs/sequelize"

@Injectable()
export class TasksService {
    constructor( @InjectModel( Task ) private taskRepo: typeof Task ) {
    }

    async getTask( taskId: string ): Promise<Task> {
        return await this.taskRepo.findByPk( taskId )
    }

    async getTasks(): Promise<Task[]> {
        return await this.taskRepo.findAll()
    }

    async createTask( dto: CreateTaskDto ) {
        return await this.taskRepo.create( dto )
    }

    async removeTask( taskId: string ) {
        return await this.taskRepo.destroy( { where: { id: taskId } } )
    }
}
