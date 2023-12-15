import { Module } from "@nestjs/common"
import { UsersModule } from "./users/users.module"
import { TasksModule } from "./tasks/tasks.module"
import { CommentsModule } from "./comments/comments.module"
import { SequelizeModule } from "@nestjs/sequelize"

@Module( {
    imports: [
        SequelizeModule.forRoot( {
            dialect: "postgres",
            host: "localhost",
            port: 5432,
            username: "postgres",
            password: "root",
            database: "todolist",
            models: [],
            autoLoadModels: true
        } ),
        UsersModule, TasksModule, CommentsModule ],
    controllers: [],
    providers: []
} )

export class AppModule {
}
