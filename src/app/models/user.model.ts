import { Comment } from './comment.model';

export class User{
  constructor(
    public email: string,
    public comments: Comment[]
  ){}
}
