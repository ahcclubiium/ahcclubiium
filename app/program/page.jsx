import BlogPostCard from "../components/BlogPostCard";
import Heading from "../components/Heading";

const contentful = require("contentful");

export const revalidate = 10;

export default async function page() {
  // Update the Contentful client configuration
  const client = await contentful.createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  try {
    const entries = await client.getEntries({ content_type: "news" });

    return (
      <section>
        <div className="text-center my-7">
          <Heading text={"Programs"}></Heading>
        </div>
        <div className="lg:grid grid-cols-2 gap-4 gap-y-10 lg:mx-60 m-4">
          {entries.items.map((entry) => (
            <BlogPostCard
              key={entry.sys.id}
              title={entry.fields.title}
              thumbnail={entry.fields.thumbnail?.fields?.file?.url || ""}
              desc={entry.fields.description}
            ></BlogPostCard>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching Contentful data:", error);
    return (
      <section>
        <div className="text-center my-7">
          <Heading text={"Error fetching data"}></Heading>
        </div>
      </section>
    );
  }
}