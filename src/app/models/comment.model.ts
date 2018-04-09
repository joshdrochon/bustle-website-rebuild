export class Comment{

  public timeStamp: Date;

  constructor(
    public username: string,
    public subject: string,
    public body: string
  ){}
}
