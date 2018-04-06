import { User } from './user.model';

export class Comment{
  constructor(
    public userId: string,
    public time: Date
  ){}
}
