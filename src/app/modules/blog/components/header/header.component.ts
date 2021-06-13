import {Component, Input, OnInit} from '@angular/core';
import {Tag} from '../../../../shared/model/tag.model';
import {TagService} from '../../../../shared/service/tag.service';
import {HttpParams} from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  loading: boolean;
  errorMessage: string;
  tags: Tag[];

  constructor(private tagService: TagService) {
    this.tags = [];
    this.loading = false;
    this.errorMessage = '';
  }

  ngOnInit(): void {
    this.getTags();
  }

  getTags(params?: HttpParams): void{
    this.loading = true;
    this.errorMessage = '';
    this.tagService.getTags(params).subscribe((response) => {
        console.log('response received');
        this.tags = response;
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
