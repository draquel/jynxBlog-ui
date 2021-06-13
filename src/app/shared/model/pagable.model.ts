import {Sort} from './sort.model';

export class Pagable{
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean | null;
  unpaged: boolean | null;

  constructor() {
    this.sort = new Sort();
    this.offset = 0;
    this.pageNumber = 0;
    this.pageSize = 0;
    this.paged = null;
    this.unpaged = null;
  }
}
