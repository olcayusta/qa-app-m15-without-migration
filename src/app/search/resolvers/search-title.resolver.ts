import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';

export const searchTitleResolveFn: ResolveFn<string> = (route, state) => {
  const { q } = route.queryParams;
  return of(q);
};
