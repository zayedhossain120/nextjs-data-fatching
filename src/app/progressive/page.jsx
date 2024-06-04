import getPost from "@/api/getPost";
import Link from "next/link";

export default async function Home() {
  const post = await getPost();

  return (
    <div className="w-[700px] mx-auto">
      <h1 className="text-5xl bg-yellow-800 py-5 my-5 max-w-fit mx-auto text-center">
        Progressively data fatching & rendering
      </h1>

      {post.length > 0 ? (
        post.map((post) => (
          <div key={post.id} className="flex items-center  gap-4">
            <p>{post.id}</p>
            <Link
              href={`/progressive/post/${post.id}`}
              className="text-3xl my-5"
            >
              {post.title}
            </Link>
          </div>
        ))
      ) : (
        <div>No data found!</div>
      )}
    </div>
  );
}
