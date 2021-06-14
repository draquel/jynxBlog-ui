import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Page} from '../../../../shared/model/page.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: Page;
  @Output() updatePageEvent: EventEmitter<number>;

  constructor() {
    this.page = new Page();
    this.updatePageEvent =  new EventEmitter<number>();
  }

  ngOnInit(): void {

  }

  updatePage(pg: number): void{
    this.updatePageEvent.emit(pg);
  }

  getNumbers(count: number): number[]{
    let i = 1;
    const arr: number[] = [];
    while (i <= count){
      arr.push(i);
      i++;
    }
    return arr;
  }

}
