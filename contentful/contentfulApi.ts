import type { EntryCollection } from 'contentful';

import { createClient } from 'contentful';

import { ContentfulPage } from '@/contentful/types';

export const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '';
export const accessToken =
  process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '';

const getContentfulPage = async (slug: string): Promise<ContentfulPage> => {
  try {
    const contentfulClient = createClient({
      space: spaceId,
      accessToken: accessToken
    });

    const result: EntryCollection<ContentfulPage> =
      await contentfulClient.getEntries({
        content_type: 'page',
        'fields.slug': slug
      });

    const page = result.items[0].fields;

    return page;
  } catch (error) {
    throw new Error(error as string);
  }
};

export default getContentfulPage;
