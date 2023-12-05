import React, { ReactNode } from 'react';
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
  Inline
} from '@contentful/rich-text-types';

import {
  Box,
  Heading,
  Link,
  ListItem,
  OrderedList,
  Tbody,
  Text,
  UnorderedList
} from '@chakra-ui/react';

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
      ): ReactNode => (
        <OrderedList>
          <ListItem>{children}</ListItem>
        </OrderedList>
      ),
      [BLOCKS.UL_LIST]: (
        node: RichBlockNodeType,
        children: ReactNode
      ): ReactNode => (
        <UnorderedList>
          <ListItem>{children}</ListItem>
        </UnorderedList>
      ),
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
      ): ReactNode => <Link href={node.data.uri}>{children}</Link>,
      ...richTextOptions
    },
    renderText: (text: string) =>
      text
        .split('\n')
        .reduce((children: ReactNode[], textSegment: string, index: number) => {
          return [...children, index > 0 && <br key={index} />, textSegment];
        }, [])
  });
