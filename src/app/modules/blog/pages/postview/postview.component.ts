import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../shared/model/post.model';
import {Router, ActivatedRoute, ParamMap } from '@angular/router';
import {HttpParams} from '@angular/common/http';
import {PostService} from '../../../../shared/service/post.service';

@Component({
  selector: 'app-postview',
  templateUrl: './postview.component.html',
  styleUrls: ['./postview.component.scss']
})
export class PostviewComponent implements OnInit {

  post: Post;
  loading: boolean;
  errorMessage: string;
  constructor(private route: ActivatedRoute, private postService: PostService) {
    this.post = new Post();
    this.loading = false;
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params.id);
      const id: number = +params.id;
      this.getPost(id);
    });
  }

  getPost(id: number): void {
    this.loading = true;
    this.errorMessage = '';
    this.postService.getPost(id)
      .subscribe(
        (response) => {
          console.log('response received');
          this.post = response;
        },
        (error) => {
          console.error('Request failed with error');
          this.errorMessage = error;
          this.loading = false;
        },
        () => {
          console.log('Request completed');
          this.loading = false;
        });
  }
}
