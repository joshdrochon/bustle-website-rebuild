import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment.model';
import { CommentService } from '../comment.service';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css'],
  providers: [CommentService]
})

export class CommentListComponent implements OnInit {

  allComments: Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.allComments = this.commentService.getComments();
  }

}
