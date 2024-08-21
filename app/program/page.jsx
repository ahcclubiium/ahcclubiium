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
      
      <div className="text-center my-7">
      <Heading text={'PROGRAMS & ACTIVITY'} color={"taupe"} size={"xlarge"} weight={"bold"} />
      </div> 
      {/* <Image
        src="/images/CAT PAW 1.png"
        width={300}
        height={300}
        className="object-cover mb-1 z-[-10] absolute right-40  top-0"
        alt = "abu hurairah club iium"
      /> */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-20 max-w-5xl mx-auto m-2">
  {client
    .getEntries({ content_type: "program" })
    .then((entries) =>
      entries.items.map((entry, index) => (
        <div
          key={entry.fields.id}
          className={`p-4 border rounded-lg shadow-lg ${
            index % 2 === 0 ? 'h-[730px] mt-0' : 'h-[700px] mt-20'
          }`}
        >
          <BlogPostCard
            id={entry.fields.id}
            title={entry.fields.title}
            thumbnail={entry.fields.thumbnail?.fields?.file?.url || ''}
            desc={entry.fields.desc}
            // slug={entry.fields.slug}
          />
        </div>
      ))
    )}
</div>



    </section>
  );
}
