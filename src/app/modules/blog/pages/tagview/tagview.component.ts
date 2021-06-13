import { Component, OnInit } from '@angular/core';
import {Post} from '../../../../shared/model/post.model';
import {PostService} from '../../../../shared/service/post.service';
import {HttpParams} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {TagService} from '../../../../shared/service/tag.service';
import {Tag} from '../../../../shared/model/tag.model';

@Component({
  selector: 'app-tagview',
  templateUrl: './tagview.component.html',
  styleUrls: ['./tagview.component.scss']
})
export class TagviewComponent implements OnInit {

  loading: boolean;
  errorMessage: string;
  posts: Post[];
  tag: Tag;
  constructor(private route: ActivatedRoute, private postService: PostService, private tagService: TagService) {
    this.posts = [];
    this.tag = new Tag();
    this.loading = false;
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getTag(params.id);
      this.getPosts(new HttpParams().set('tagIds', params.id));
    });
  }

  public getPosts(params?: HttpParams): void {
    this.loading = true;
    this.errorMessage = '';
    this.postService.getPosts(params)
      .subscribe(
        (response) => {
          console.log('response received');
          this.posts = response.content;
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

  getTag(id: number): void {
    this.loading = true;
    this.errorMessage = '';
    this.tagService.getTag(id)
      .subscribe(
        (response) => {
          console.log('response received');
          this.tag = response;
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
