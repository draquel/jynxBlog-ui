import {Component, Input, OnInit} from '@angular/core';
import {Post} from '../../../../shared/model/post.model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor() {
    this.post = new Post();
  }

  ngOnInit(): void {

  }

  formatDate(input: string): string{
    const date: Date = new Date(input);
    return  date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  }

}


