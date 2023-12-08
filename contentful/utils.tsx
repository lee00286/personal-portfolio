import React, { Children, ReactNode } from 'react';
import {
  documentToReactComponents,
  NodeRenderer
} from '@contentful/rich-text-react-renderer';
import {
  Document,
  NodeData,
  BLOCKS,
  INLINES,
  Block,
  Inline,
  MARKS
} from '@contentful/rich-text-types';

import {
  Code,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Tag,
  Tbody,
  Text,
  UnorderedList
} from '@chakra-ui/react';
import { ContentfulLine, ContentfulPage } from './types';
import { contentfulLineInitial, contentfulPageInitial } from './initial';

type RichBlockNodeType = Block | Inline | { nodeType: string };
type RichInlineNodeType = Block | Inline;

export const renderContentfulRichText = (
  richText: NodeData,
  richTextOptions?: Record<string, NodeRenderer>
): ReactNode =>
  documentToReactComponents(richText as Document, {
    renderNode: {
      [BLOCKS.HEADING_1]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => (
        <Heading as="h1" size="2xl">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_2]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => (
        <Heading as="h2" size="xl">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_3]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => (
        <Heading as="h3" size="lg">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_4]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => (
        <Heading as="h4" size="md">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_5]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => (
        <Heading as="h5" size="sm">
          {children}
        </Heading>
      ),
      [BLOCKS.HEADING_6]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => (
        <Heading as="h6" size="xs">
          {children}
        </Heading>
      ),
      [BLOCKS.PARAGRAPH]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => <Text>{children}</Text>,
      [BLOCKS.OL_LIST]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => <OrderedList>{children}</OrderedList>,
      [BLOCKS.UL_LIST]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => <UnorderedList>{children}</UnorderedList>,
      [BLOCKS.LIST_ITEM]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => <ListItem>{children}</ListItem>,
      [BLOCKS.TABLE]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => <Tbody>{children}</Tbody>,
      [BLOCKS.EMBEDDED_ENTRY]: (node: RichInlineNodeType): ReactNode => {
        const target = node?.data?.target;
        return null;
      },
      [INLINES.HYPERLINK]: (
        node: RichInlineNodeType,
        children: ReactNode
      ): ReactNode => (
        <Link href={node.data.uri} color="teal.500">
          {children}
        </Link>
      ),
      ...richTextOptions
    },
    renderText: (text: string) =>
      text
        .split('\n')
        .reduce((children: ReactNode[], textSegment: string, index: number) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, []),
    renderMark: {
      [MARKS.CODE]: (text: ReactNode) => {
        let flag = false;
        Children.map(text, (child) => {
          if (typeof child === 'string' && child.includes('#')) {
            flag = true;
          }
        });
        return flag ? (
          <Tag colorScheme="yellow">{text}</Tag>
        ) : (
          <Code colorScheme="orange">{text}</Code>
        );
      }
    }
  });

export const convertEntryToContentfulPage = (
  entry: any
): ContentfulPage | null => {
  let contentfulPage: ContentfulPage = contentfulPageInitial;

  if (
    entry?.pageId &&
    entry.slug &&
    entry.title &&
    entry.isTitleVisible !== undefined
  ) {
    contentfulPage.pageId = entry.pageId;
    contentfulPage.slug = entry.slug;
    contentfulPage.title = entry.title;
    contentfulPage.isTitleVisible = entry.isTitleVisible;
  } else {
    return null;
  }

  if (entry.emoji) contentfulPage.emoji = entry.emoji;
  if (entry.text) contentfulPage.text = entry.text;
  if (entry.codeBlock) contentfulPage.codeBlock = entry.codeBlock;
  if (entry.sections) contentfulPage.sections = entry.sections;
  if (entry.subPages) contentfulPage.subPages = entry.subPages;
  if (entry.lines) contentfulPage.subPages = entry.lines;
  if (entry.media) contentfulPage.media = entry.media;

  return contentfulPage;
};

export const convertEntryToContentfulLine = (
  entry: any
): ContentfulLine | null => {
  let contentfulLine: ContentfulLine = contentfulLineInitial;

  if (
    entry?.lineId &&
    entry.title &&
    entry.isTitleVisible !== undefined &&
    entry?.text
  ) {
    contentfulLine.lineId = entry.lineId;
    contentfulLine.title = entry.title;
    contentfulLine.isTitleVisible = entry.isTitleVisible;
    contentfulLine.text = entry.text;
  } else {
    return null;
  }

  if (entry.startDate) contentfulLine.startDate = entry.startDate;
  if (entry.endDate) contentfulLine.endDate = entry.endDate;
  if (entry.location) contentfulLine.location = entry.location;
  if (entry.url) contentfulLine.url = entry.url;
  if (entry.media) contentfulLine.media = entry.media;

  return contentfulLine;
};
