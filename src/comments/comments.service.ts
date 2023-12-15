import { Injectable } from "@nestjs/common"
import { CreateCommentDto } from "./CreateCommentDto"
import { IComment } from "./IComment"

@Injectable()
export class CommentsService {
    getComment( commentId: string): IComment {
        return {
            content: "test",
            created: "test"
        }
    }

    getComments(): IComment[] {
        return [
            {
                content: "test",
                created: "test"
            },
            {
                content: "test",
                created: "test"
            }
        ]
    }

    createComment( comment: CreateCommentDto ) {
        console.log(comment)
    }

    removeComment( commentId: string ) {
        console.log(commentId)
    }
}
