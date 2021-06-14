import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BlogComponent} from './blog.component';
import {HomeComponent} from './pages/home/home.component';
import {PostviewComponent} from './pages/postview/postview.component';
import {TagviewComponent} from './pages/tagview/tagview.component';

const routes: Routes = [
  {path: '', component: BlogComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'p/:id', component: PostviewComponent},
      {path: 't/:id', component: TagviewComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class BlogRoutingModule { }
