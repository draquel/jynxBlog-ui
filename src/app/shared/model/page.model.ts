import {Sort} from './sort.model';

export class Page{
  content: any[];
  last: boolean | null;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  sort: Sort;
  first: boolean | null;
  numberOfElements: number;
  empty: boolean | null;

  constructor() {

    this.content = [];
    this.last = null;
    this.totalPages = 0;
    this.totalElements = 0;
    this.size = 0;
    this.number = 0;
    this.sort = new Sort();
    this.first = null;
    this.numberOfElements = 0;
    this.empty = null;

  }
}
