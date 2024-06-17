import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { createClient } from "contentful";

export default async function News({ params }) {
  const client = createClient({
    space: 'fb9e3gkpjnm6',
    accessToken: 'YFXxdZmCP54QU2G_lgH0EunE2NyjJO2vILRCbuUn0FY'
  });

  try {
    const entry = await client.getEntry(params.slug);
    const document = entry.fields.content;
    const imageUrl = `https:${entry.fields.image.fields.file.url}`; // Prepend with "https:"
    console.log("Image URL:", imageUrl); // Console log imageUrl
    const date = entry.fields.date;

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
        <section className="mx-10 lg:mx-72 my-10 text-justify">
          <p>{date}</p>
          {documentToReactComponents(document, options)}
          <img src={'http://images.ctfassets.net/fb9e3gkpjnm6/Ahu9SJLXuBPg8O8ZKNrzv/856b1cebcc60bcdbfbbe1a53581b2c2e/ahcprogram1.jpg%22'} className="w-1/2 mx-auto" />
        </section>
      </>
    );
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return (
      <section className="mx-10 lg:mx-72 my-10 text-justify">
        <h1 className="text-3xl text-sky-800 font-bold">Error fetching data</h1>
      </section>
    );
  }
}
