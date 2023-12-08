import { ContentfulLine, ContentfulPage } from './types';

export const contentfulPageInitial: ContentfulPage = {
  pageId: -1,
  slug: '',
  title: '',
  isTitleVisible: true
};

export const contentfulLineInitial: ContentfulLine = {
  lineId: -1,
  title: '',
  isTitleVisible: true,
  text: '' as any
};
