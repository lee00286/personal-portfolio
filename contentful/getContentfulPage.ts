import contentfulApi from './contentfulApi';

const getContentfulPage = async (slug: string) => {
  try {
    const contentfulClient = contentfulApi();
    const result = await contentfulClient.getEntries({
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
