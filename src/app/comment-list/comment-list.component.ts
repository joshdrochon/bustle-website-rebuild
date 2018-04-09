import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment.model';
import { CommentService } from '../comment.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  providers: [CommentService]
})
export class CommentListComponent implements OnInit {

  comments: FirebaseListObservable<any[]>;

  constructor(private commentService: CommentService){}

  ngOnInit(){
    this.comments = this.commentService.getComments();
  }

}
