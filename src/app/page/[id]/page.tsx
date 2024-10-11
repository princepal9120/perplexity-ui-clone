"use client"

import { useRouter } from "next/router";


const NewsArticle = () => {
  const router = useRouter();
  const { id } = router.query as any;

  // For now, we can just display the ID, but in real-world scenarios, you'd fetch the article data using the ID.
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">News Article {id}</h1>
      <p>This is the detailed content for the news article with ID {id}.</p>
    </div>
  );
};

export default NewsArticle;
