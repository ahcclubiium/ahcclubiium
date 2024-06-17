'use client'
import React, { useState, useEffect } from "react";
import BlogPostCard from "../components/BlogPostCard";
import Heading from "../components/Heading";
import { createClient } from "contentful";

const SPACE_ID = 'fb9e3gkpjnm6';
// const ACCESS_TOKEN = 'CFPAT-GrEO2oP5dVRlQglfrYL1EqmdsdQFDq8sazdYxEFl0j8';
const ACCESS_TOKEN = 'YFXxdZmCP54QU2G_lgH0EunE2NyjJO2vILRCbuUn0FY'

export const revalidate = 10;

export default function Page() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const client = createClient({
      space: SPACE_ID,
      accessToken: ACCESS_TOKEN,
    });

    client.getEntries({ content_type: "program" })
      .then((response) => {
        console.log("Fetched Entries:", response.items);
        setEntries(response.items); // Update state with fetched items
      })
      .catch((error) => {
        console.error("Error fetching Contentful data:", error);
        setError(error);
      });
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <section>
      <div className="text-center my-7">
        <Heading text={"Programs"} />
      </div>
      <div className="lg:grid grid-cols-2 gap-4 gap-y-10 lg:mx-60 m-4">
        {entries.map((entry) => (
          <BlogPostCard
            key={entry.sys.id}
            title={entry.fields.title}
            thumbnail={entry.fields.thumbnail?.fields?.file?.url || ""}
            desc={entry.fields.description}
          />
        ))}
      </div>
      {error && (
        <div className="text-center my-7">
          <Heading text={"Error fetching data"} />
          <div className="mt-3">
            <p className="text-red-500">Details:</p>
            <p>{error.message}</p> {/* Display error message */}
          </div>
        </div>
      )}
    </section>
  );
}
