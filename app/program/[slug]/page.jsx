const contentful = require("contentful");
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";

export default async function News({ params }) {
  const client = contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const entry = await client.getEntry(params.slug);
    const document = entry.fields.content;
    const imageUrl = entry.fields.image.fields.file.url;
    const date = entry.fields.date;
    const src = "https:" + imageUrl;

    const Heading = ({ children }) => (
      <h1 className="text-3xl text-sky-800 font-bold">{children}</h1>
    );
    const Paragraph = ({ children }) => (
      <p className="text-gray-500 leading-loose py-4">{children}</p>
    );

    const options = {
      renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => (
          <Paragraph>{children}</Paragraph>
        ),
        [BLOCKS.HEADING_1]: (node, children) => <Heading>{children}</Heading>,
      },
    };

    return (
      <>
        <section className=" mx-10 lg:mx-72 my-10 text-justify">
          {date}
          {documentToReactComponents(document, options)}
          <img src={src} className="w-1/2 mx-auto" />
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return (
      <section className=" mx-10 lg:mx-72 my-10 text-justify">
        <h1 className="text-3xl text-sky-800 font-bold">Error fetching data</h1>
      </section>
    );
  }
}