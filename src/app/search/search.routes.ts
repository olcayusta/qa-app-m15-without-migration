import { Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { searchTitleResolveFn } from './resolvers/search-title.resolver';

export default [
  {
    path: '',
    component: SearchComponent,
    title: searchTitleResolveFn
  }
] as Routes;
