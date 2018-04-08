export class Comment{

  public timeStamp: Date;
  public id: string;

  constructor(
    public username: string,
    public subject: string,
    public body: string
  ){}
}
