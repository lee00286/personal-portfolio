import { NodeData } from '@contentful/rich-text-types';

export type ContentfulPageSkeleton = {
  contentTypeId: 'page';
  fields: {
    pageId: number;
    slug: string;
    emoji?: string;
    title: string;
    isTitleVisible: boolean;
    text?: NodeData;
    codeBlock?: NodeData;
    sections?: Array<NodeData>;
    subPages?: Array<NodeData>;
    lines?: Array<NodeData>;
    media?: Array<NodeData>;
  };
};

export type ContentfulSectionSkeleton = {
  contentTypeId: 'section';
  fields: {
    sectionId: number;
    slug: string;
    emoji?: string;
    title: string;
    isTitleVisible: boolean;
    startDate?: string;
    endDate?: string;
    location?: NodeData;
    text?: NodeData;
    codeBlock?: NodeData;
    subPages?: Array<NodeData>;
    lines?: Array<NodeData>;
    media?: Array<NodeData>;
    columnNum: number;
    columns: Array<NodeData>;
  };
};

export type ContentfulLineSkeleton = {
  contentTypeId: 'line';
  fields: {
    lineId: number;
    title: string;
    isTitleVisible: boolean;
    startDate?: string;
    endDate?: string;
    location?: NodeData;
    text: NodeData;
    url?: string;
    media?: Array<NodeData>;
  };
};

export interface ContentfulPage {
  pageId: number;
  slug: string;
  emoji?: string;
  title: string;
  isTitleVisible: boolean;
  text?: NodeData;
  codeBlock?: NodeData;
  sections?: Array<NodeData>;
  subPages?: Array<NodeData>;
  lines?: Array<NodeData>;
  media?: Array<NodeData>;
}

export interface ContentfulSection {
  sectionId: number;
  slug: string;
  emoji?: string;
  title: string;
  isTitleVisible: boolean;
  startDate?: string;
  endDate?: string;
  location?: NodeData;
  text?: NodeData;
  codeBlock?: NodeData;
  subPages?: Array<NodeData>;
  lines?: Array<NodeData>;
  media?: Array<NodeData>;
  columnNum: number;
  columns: Array<NodeData>;
}

export interface ContentfulLine {
  lineId: number;
  title: string;
  isTitleVisible: boolean;
  startDate?: string;
  endDate?: string;
  location?: NodeData;
  text: NodeData;
  url?: string;
  media?: Array<NodeData>;
}

export interface ContentfulMedia {
  mediaId: number;
  title: string;
  media: NodeData;
  extension: string;
  alt: string;
}
