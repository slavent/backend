import { Module } from "@nestjs/common"
import { UsersModule } from "./users/users.module"
import { TasksModule } from "./tasks/tasks.module"
import { CommentsModule } from "./comments/comments.module"
import { SequelizeModule } from "@nestjs/sequelize"
import { ConfigModule } from "@nestjs/config"
import { User } from "./users/users.model"

@Module( {
    imports: [
        ConfigModule.forRoot( {
            envFilePath: ".env"
        } ),
        SequelizeModule.forRoot( {
            dialect: "postgres",
            host: process.env.HOST,
            port: +process.env.PORT,
            username: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            models: [User],
            autoLoadModels: true
        } ),
        UsersModule, TasksModule, CommentsModule ],
    controllers: [],
    providers: []
} )

export class AppModule {
}
