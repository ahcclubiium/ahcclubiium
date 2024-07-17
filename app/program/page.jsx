
import BlogPostCard from '../components/BlogPostCard';
import Heading from '../components/Heading';
import { createClient } from 'contentful'; 

export default async function Page() {
   // DON'T TOUCH THIS PART
  const client = await createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    environment: "master",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN, 
  });
  
  return (
    <section>
      {/* <div className="text-center my-7">
        <Heading text={'Programs'} />
      </div> */}
      <div className="lg:grid grid-cols-2 gap-4 gap-y-10 lg:mx-60 m-4">
        {client
          .getEntries({ content_type: "program" })
          .then((entries) =>
            entries.items.map((entry) => (
          <BlogPostCard
            key={entry.fields.id}
            title={entry.fields.title}
            thumbnail={entry.fields.thumbnail?.fields?.file?.url || ''}
            desc={entry.fields.desc}
            slug={entry.fields.slug}
          />
        )))}
      </div>
    </section>
  );
}