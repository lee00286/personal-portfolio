import contentfulApi from '@/contentful/contentfulApi';

const getContentfulEntry = async (id: string) => {
  try {
    const contentfulClient = contentfulApi();
    const result = await contentfulClient.getEntry(id);
    const fields = result.fields;
    return fields;
  } catch (error) {
    throw new Error(error as string);
  }
};

export default getContentfulEntry;
