import { Body, Controller, Delete, Get, Param, Post } from "@nestjs/common"
import { CommentsService } from "./comments.service"
import { IComment } from "./IComment"
import { CreateCommentDto } from "./CreateCommentDto"

@Controller( "/comments" )
export class CommentsController {
    constructor( private readonly commentsService: CommentsService ) {
    }

    @Get( ":id" )
    getComment( @Param( "id" ) id: string ): IComment {
        return this.commentsService.getComment( id )
    }

    @Get()
    getComments(): IComment[] {
        return this.commentsService.getComments()
    }

    @Post()
    createComment( @Body() createTaskDto: CreateCommentDto ) {
        return this.commentsService.createComment( createTaskDto )
    }

    @Delete( ":id" )
    removeComment( @Param( "id" ) id: string ) {
        return this.commentsService.removeComment( id )
    }
}
