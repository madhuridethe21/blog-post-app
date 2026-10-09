export type BlogPosts = {
  id: number;
  title: string;
  text: string;
};

type BlogPostProps = {
  posts: BlogPosts[];
};

export default function BlogPost({ posts }: BlogPostProps) {
  return (
    <div id="blog-post" className="mx-auto max-w-3xl px-4">
      <h1 className="mb-6 text-left text-3xl font-bold">Blog Posts</h1>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-zinc-800 text-gray-400 rounded-sm p-4 shadow-sm shadow-gray-500/50 text-left"
          >
            <p className="text-md font-bold py-2">{post.title}</p>
            <p className="mt-2 text-xs">{post.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
