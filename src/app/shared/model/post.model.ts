
export class Post{
  title: string;
  tagline?: string;
  created: string;
  authorFullName: string;
  body: string;

  constructor() {
    this.title = '';
    this.created = '';
    this.authorFullName = '';
    this.body = '';
  }
}
