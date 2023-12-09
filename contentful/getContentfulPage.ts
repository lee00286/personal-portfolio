import { ContentfulPage, ContentfulPageSkeleton } from '@/contentful/types';
import contentfulApi from './contentfulApi';

const getContentfulPage = async (slug: string): Promise<ContentfulPage> => {
  try {
    const contentfulClient = contentfulApi();
    const result = await contentfulClient.getEntries<ContentfulPageSkeleton>({
      include: 2,
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
