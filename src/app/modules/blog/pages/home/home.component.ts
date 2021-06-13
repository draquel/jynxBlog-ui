import { Component, OnInit } from '@angular/core';
import {PostService} from '../../../../shared/service/post.service';
import {Post} from '../../../../shared/model/post.model';
import {HttpParams} from '@angular/common/http';
import {Page} from '../../../../shared/model/page.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loading: boolean;
  errorMessage: string;
  posts: Post[];
  featured: Post[];
  page: Page;

  constructor(private postService: PostService) {
    this.loading = false;
    this.errorMessage = '';
    this.posts = [];
    this.featured = [];
    this.page = new Page();
  }

  ngOnInit(): void {
    this.getPosts(new HttpParams().set('featured', 'true'));
    this.getPosts(new HttpParams().set('featured', 'false'));
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
            this.page = response;
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
