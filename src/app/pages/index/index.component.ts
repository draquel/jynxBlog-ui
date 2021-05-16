import { Component, OnInit } from '@angular/core';
import { PostService } from '../../shared/service/post.service';
import { Post } from '../../shared/model/post.model';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  featured: Post[] = [];
  posts: Post[] = [];
  loading = false;
  errorMessage = '';

  constructor(private postService: PostService){ }

  ngOnInit(): void {
    this.getPosts(new HttpParams()
      .set('featured', 'true')
      .set('published', 'true'));
    this.getPosts(new HttpParams()
      .set('featured', 'false')
      .set('published', 'true'));

  }

  public getPosts(params?: HttpParams): void {
    this.loading = true;
    this.errorMessage = '';
    this.postService.getPosts(params)
      .subscribe(
        (response) => {
          console.log('response received');
          if (params != null && params.get('featured') === 'true'){
            this.featured = response.content;
          } else {
            this.posts = response.content;
          }
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
