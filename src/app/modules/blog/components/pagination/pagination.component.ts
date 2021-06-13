import {Component, Input, OnInit} from '@angular/core';
import {Page} from '../../../../shared/model/page.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() page: Page;
  constructor() {
    this.page = new Page();
  }

  ngOnInit(): void {

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
