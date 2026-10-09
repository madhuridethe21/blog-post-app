import { useEffect, useState, type ReactNode } from "react";
import BlogPost, { type BlogPosts } from "./components/BlogPost.tsx";
import { get } from "./util/http.ts";
import fetchingImg from "./assets/data-fetch.png";
import { z } from "zod";

// outside of App component function (since this doesn't need to be re-created all the time)
const rawDataBlogPostSchema = z.object({
  id: z.number(),
  userId: z.number(),
  title: z.string(),
  body: z.string(),
});
// z.array() is a Zod method that creates a new schema based on another schema
const expectedResponseDataSchema = z.array(rawDataBlogPostSchema);

type RawDataBlogPost = {
  id: number;
  userId: number;
  title: string;
  body: string;
};
function App() {
  const [fetchedPost, setFetchedPost] = useState<BlogPosts[] | undefined>();
  const [error, setError] = useState<string>("");
  const [isFetching, setIsFetching] = useState<boolean>(false);
  useEffect(() => {
    async function fetchPosts() {
      setIsFetching(true);
      try {
        const data = await get("https://jsonplaceholder.typicode.com/posts");
        const parsedData = expectedResponseDataSchema.parse(data);
        // No more type casting via "as" needed!
        // Instead, here, TypeScript "knows" that parsedData will be an array
        // full with objects as defined by the above schema
        const blogPosts: BlogPosts[] = parsedData.map((rawPost) => {
          return {
            id: rawPost.id,
            title: rawPost.title,
            text: rawPost.body,
          };
        });
        setFetchedPost(blogPosts);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        }
        // setError('Failed to fetch posts!');
      }

      setIsFetching(false);
    }

    fetchPosts();
  }, []);

  let content: React.ReactNode;

  if (isFetching) {
    content = (
      <p className="py-4 text-center text-blue-600">Loading posts...</p>
    );
  } else if (error) {
    content = (
      <p className="rounded-lg bg-red-100 p-4 text-red-700">Error: {error}</p>
    );
  } else if (fetchedPost) {
    content = <BlogPost posts={fetchedPost} />;
  } else {
    content = <p>No posts found.</p>;
  }

  return (
    <div>
      <div className="flex justify-center">
        <img
          src={fetchingImg}
          alt="An abstract Image depicting a fecthing image"
          className="mx-auto block h-24 rounded-full sm:mx-0 sm:shrink-0 shadow-sm shadow-gray-200/50 m-5"
        />
      </div>
      <div>{content}</div>
    </div>
  );
}
export default App;
