import { Component } from '@angular/core';
import { Comment } from '../models/comment.model';

@Component({
  selector: 'app-comment-box',
  templateUrl: './comment-box.component.html',
  styleUrls: ['./comment-box.component.css']
})
export class CommentBoxComponent {
  
  constructor(){}

  comments: Comment[] = [];

  submitForm(username: string, subject: string, body: string){
    let newComment: Comment = new Comment(username, subject, body);
    this.comments.push(newComment);
  }

}
