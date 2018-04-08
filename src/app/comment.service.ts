import { Injectable } from '@angular/core';
import { Comment } from './models/comment.model';

@Injectable()
export class CommentService {

  comments: Comment[] = [
   new Comment("username", "Subject1", "This is the body of a comment"),
   new Comment("username", "Subject2", "This is the body of a comment"),
   new Comment("username", "Subject3", "This is the body of a comment"),
   new Comment("username", "Subject4", "This is the body of a comment"),
   new Comment("username", "Subject5", "This is the body of a comment")
  ];

  getComments(){
    return this.comments;
  }


  constructor() { }

}
