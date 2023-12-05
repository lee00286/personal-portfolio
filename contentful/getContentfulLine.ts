import { ContentfulLine } from '@/contentful/types';
import contentfulApi from './contentfulApi';

const getContentfulLine = async (lineId: string): Promise<ContentfulLine> => {
  try {
    const contentfulClient = contentfulApi();
    const result = await contentfulClient.getEntry(lineId);
    const line = result.fields;
    return line;
  } catch (error) {
    throw new Error(error as string);
  }
};

export default getContentfulLine;
