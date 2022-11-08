import { ResolveFn } from '@angular/router';
import { of } from 'rxjs';
import { Tag } from '@models/tag.model';

export const tagTitleResolveFn: ResolveFn<string> = (route) => {
  const { tag } = route.parent!.data as { tag: Tag };
  return of(tag.title);
};
