import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../../../../shared/model/tag.model';

@Component({
  selector: 'app-tag-badge-list',
  templateUrl: './tag-badge-list.component.html',
  styleUrls: ['./tag-badge-list.component.scss']
})
export class TagBadgeListComponent implements OnInit {

  @Input() tags: Tag[];
  @Input() size: number | null;
  @Input() shadow: boolean;
  @Input() enableLinks: boolean;

  constructor() {
    this.tags = [];
    this.size = null;
    this.shadow = false;
    this.enableLinks = true;
  }

  ngOnInit(): void {
  }

}
