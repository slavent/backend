import { Module } from "@nestjs/common"
import { UsersModule } from "./users/users.module"
import { TasksModule } from './tasks/tasks.module';
import { CommentsModule } from "./comments/comments.module"

@Module( {
    imports: [ UsersModule, TasksModule, CommentsModule ],
    controllers: [],
    providers: []
} )
export class AppModule {
}
