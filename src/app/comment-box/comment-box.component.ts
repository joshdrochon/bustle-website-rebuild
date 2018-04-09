import { Component } from '@angular/core';
import { Comment } from '../models/comment.model';
import { CommentService } from '../comment.service'

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css'],
  providers: [CommentService]
})
export class CommentBoxComponent {

  constructor(private commentService: CommentService){}

    submitForm(username: string, subject: string, body: string){
      let newComment: Comment = new Comment(username, subject, body);
      this.commentService.addComment(newComment);
    }

}
