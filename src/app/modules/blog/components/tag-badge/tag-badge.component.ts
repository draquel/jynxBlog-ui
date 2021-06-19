import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../../../../shared/model/tag.model';

@Component({
  selector: 'app-tag-badge',
  templateUrl: './tag-badge.component.html',
  styleUrls: ['./tag-badge.component.scss']
})
export class TagBadgeComponent implements OnInit {


  @Input() tag: Tag;
  @Input() size: number | null;
  @Input() shadow: boolean;
  @Input() startMargin: boolean | null;
  @Input() endMargin: boolean | null;
  @Input() xMargin: boolean;
  @Input() linkEnabled: boolean;

  constructor() {
    this.size = null;
    this.shadow = false;
    this.xMargin = false;
    this.startMargin = null;
    this.endMargin = null;
    this.tag = new Tag();
    this.linkEnabled = true;
  }

  ngOnInit(): void {
  }

}
