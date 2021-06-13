import {Tag} from './tag.model';

export class Post{
  id: bigint | null;
  title: string;
  tagline: string;
  createdAt: string;
  modifiedAt: string;
  authorFullName: string;
  body: string;
  tags: Tag[];

  constructor() {
    this.id = null;
    this.title = '';
    this.tagline = '';
    this.createdAt = '';
    this.modifiedAt = '';
    this.authorFullName = '';
    this.body = '';
    this.tags = [];
  }
}
