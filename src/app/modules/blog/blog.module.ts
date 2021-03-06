import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FeaturedComponent } from './components/featured/featured.component';
import { PostComponent } from './components/post/post.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PostviewComponent } from './pages/postview/postview.component';
import { TagviewComponent } from './pages/tagview/tagview.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { PageviewComponent } from './pages/pageview/pageview.component';
import { TagBadgeListComponent } from './components/tag-badge-list/tag-badge-list.component';
import { TagBadgeComponent } from './components/tag-badge/tag-badge.component';

// noinspection AngularInvalidImportedOrDeclaredSymbol
@NgModule({
  declarations: [
    BlogComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    FeaturedComponent,
    PostComponent,
    HomeComponent,
    PostviewComponent,
    TagviewComponent,
    PaginationComponent,
    PageviewComponent,
    TagBadgeListComponent,
    TagBadgeComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  providers: [],
  bootstrap: []
})
export class BlogModule { }
