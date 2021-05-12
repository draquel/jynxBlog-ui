import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  @Input() post: Post;
  constructor() {
    this.post = {
      title: '',
      tagline: '',
      created: '',
      author: '',
      body: ''
    };
  }

  ngOnInit(): void {
  }

}


