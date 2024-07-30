import { createClient } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

const News = async ({ params }) => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: 'master', // defaults to 'master' if not set
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  });

  const entries = await client.getEntries({
    content_type: 'program', // Adjust the content type if necessary
    'fields.slug': params.slug // Assuming 'slug' is a unique identifier
  });

  if (!entries.items.length) {
    return <p>Entry not found</p>;
  }

  const entry = entries.items[0];
  const description = entry.fields.description;
  const imageUrl = entry.fields.image.fields.file.url;
  const src = "https:" + imageUrl;

  const Heading = ({ children }) => <h1 className="text-3xl text-sky-800 font-bold">{children}</h1>;
  const Paragraph = ({ children }) => <p className="text-gray-500 leading-loose py-4">{children}</p>;

  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Paragraph>{children}</Paragraph>,
      [BLOCKS.HEADING_1]: (node, children) => <Heading>{children}</Heading>
    }
  };

  return (
    <section className="mx-72 my-10 text-justify">
      {/* <p>{date}</p> */}
      {documentToReactComponents(description, options)}
      <img src={src} className="w-1/2 mx-auto" />
    </section>
  );
};

export default News;
