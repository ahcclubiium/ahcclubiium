
import BlogPostCard from '../components/BlogPostCard';
import Heading from '../components/Heading';
import { createClient } from 'contentful'; 
import Image from "next/image";

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
      <Image
                src="/images/CAT PAW 1.png"
                width={300}
                height={300}
                className="object-cover mb-1 z-[-1] absolute inset-0"
              />
      <div className="grid-cols-1 sm:grid-cols-4 lg:grid grid-cols-3 gap-4 gap-y-10 lg:mx-60 m-4">
        {client
          .getEntries({ content_type: "program"})
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