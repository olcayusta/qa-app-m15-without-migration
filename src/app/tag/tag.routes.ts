import { Routes } from '@angular/router';
import { tagResolveFn } from './tag.resolver';
import { TagComponent } from './tag.component';
import { tagTitleResolveFn } from './resolvers/tag-title.resolver';

export default [
  {
    path: '',
    resolve: {
      tag: tagResolveFn
    },
    children: [
      {
        path: '',
        component: TagComponent,
        title: tagTitleResolveFn
      }
    ]
  }
] as Routes;
