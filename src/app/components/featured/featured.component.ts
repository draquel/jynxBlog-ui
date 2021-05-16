import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../shared/model/post.model';

@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
})
export class FeaturedComponent implements OnInit {

  @Input() posts: Post[];
  constructor() {
    this.posts = [];
  }

  ngOnInit(): void {
  }

}
