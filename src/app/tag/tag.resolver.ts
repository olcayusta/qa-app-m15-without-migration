import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { TagService } from './tag.service';
import { Tag } from '@models/tag.model';

export const tagResolveFn: ResolveFn<Tag> = (route) => {
  return inject(TagService).getTag(route.paramMap.get('tagId'));
};
