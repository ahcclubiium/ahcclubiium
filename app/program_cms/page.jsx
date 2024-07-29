'use client'

import React, { useState, useEffect } from 'react';
import BlogPostCard from '../components/BlogPostCard';
import Heading from '../components/Heading';
import { createClient } from 'contentful';

const CONTENTFUL_SPACE_ID = process.env.REACT_APP_CONTENTFUL_SPACE_ID;
const CONTENTFUL_ACCESS_TOKEN = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;

export default function Page() {
  const [entries, setEntries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContentfulData = async () => {
      try {
        const accessToken = process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN;
        if (!accessToken) {
          throw new Error('Contentful access token not found.');
        }

        const client = createClient({
          space: process.env.REACT_APP_CONTENTFUL_SPACE_ID,
          accessToken: accessToken,
        });

        const response = await client.getEntries({ content_type: 'program' });
        console.log('Fetched Entries:', response.items);
        setEntries(response.items);
      } catch (error) {
        console.error('Error fetching Contentful data:', error);
        setError(error);
      }
    };

    fetchContentfulData();
  }, []); // Empty dependency array ensures useEffect runs once on component mount

  return (
    <section>
      <div className="text-center my-7">
        <Heading text={'Programs'} />
      </div>
      <div className="lg:grid grid-cols-2 gap-4 gap-y-10 lg:mx-60 m-4">
        {entries.map((entry) => (
          <BlogPostCard
            key={entry.sys.id}
            title={entry.fields.title}
            thumbnail={entry.fields.thumbnail?.fields?.file?.url || ''}
            desc={entry.fields.description}
          />
        ))}
      </div>
      {error && (
        <div className="text-center my-7">
          <Heading text={'Error fetching data'} />
          <div className="mt-3">
            <p className="text-red-500">Details:</p>
            <p>{error.message}</p>
          </div>
        </div>
      )}
    </section>
  );
}
