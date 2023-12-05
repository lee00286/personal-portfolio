import { createClient } from 'contentful';

const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '';
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '';

const contentfulApi = () => {
  try {
    const contentfulClient = createClient({
      space: spaceId,
      accessToken: accessToken
    });
    return contentfulClient;
  } catch (error) {
    throw new Error(error as string);
  }
};

export default contentfulApi;
