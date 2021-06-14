import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Post} from '../../../../shared/model/post.model';
import {PostService} from '../../../../shared/service/post.service';
import {HttpParams} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
import {TagService} from '../../../../shared/service/tag.service';
import {Tag} from '../../../../shared/model/tag.model';
import {Page} from '../../../../shared/model/page.model';

@Component({
  selector: 'app-tagview',
  templateUrl: './tagview.component.html',
  styleUrls: ['./tagview.component.scss']
})
export class TagviewComponent implements OnInit {

  loading: boolean;
  errorMessage: string;
  page: Page;
  posts: Post[];
  tag: Tag;

  @ViewChild('pageTop')
  pageTop: ElementRef | undefined;

  constructor(private route: ActivatedRoute, private postService: PostService, private tagService: TagService) {
    this.page = new Page();
    this.posts = [];
    this.tag = new Tag();
    this.loading = false;
    this.errorMessage = '';
    this.pageTop = undefined;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.getTag(params.id);
      this.getPosts(new HttpParams().set('tagIds', params.id));
    });
  }

  public getPosts(params?: HttpParams, after?: () => void): void {
    this.loading = true;
    this.errorMessage = '';
    this.postService.getPosts(params)
      .subscribe(
        (response) => {
          console.log('response received');
          this.page = response;
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
          if (after !== undefined){ after(); }
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

  updatePage(pgNum?: number): void{
    if (pgNum === undefined){ pgNum = 1; }
    pgNum = pgNum - 1;
    this.getPosts(
      new HttpParams().set('featured', 'false').set('page', pgNum.toString()),
      () => {if (this.pageTop !== undefined){ this.pageTop.nativeElement.scrollIntoView({behavior: 'smooth'}); }}
    );
  }

}
