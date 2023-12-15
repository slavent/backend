import { Injectable } from "@nestjs/common"
import { CreateTaskDto } from "./CreateTaskDto"
import { ITask } from "./ITask"

@Injectable()
export class TasksService {
    getTask( taskId: string): ITask {
        return {
            title: "test",
            description: "test",
            created: "test"
        }
    }

    getTasks(): ITask[] {
        return [
            {
                title: "test",
                description: "test",
                created: "test"
            },
            {
                title: "test",
                description: "test",
                created: "test"
            }
        ]
    }

    createTask( task: CreateTaskDto ) {
        console.log(task)
    }

    removeTask( taskId: string ) {
        console.log(taskId)
    }
}
