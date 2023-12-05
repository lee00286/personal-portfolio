import { NodeData } from '@contentful/rich-text-types';

export interface ContentfulPage {
  fields: { slug: string };
  contentTypeId: string;
  pageId: number;
  slug: string;
  emoji?: string;
  title: string;
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
  text: string;
  date: string;
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
