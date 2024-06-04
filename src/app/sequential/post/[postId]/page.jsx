import singlePost from "@/api/singlePost";
import singlePostComments from "@/api/singlePostComments";

export default async function PostPage({ params: { postId } }) {
  const post = await singlePost(postId);
  const commnents = await singlePostComments(postId);
  return (
    <div className="text-center mt-10 text-green-600 w-[600px] mx-auto">
      <h3 className="text-2xl"> {post.title}</h3>
      <p>{post.body}</p>
      <div className="mt-10 border-t border ">
        <h3 className="text-2xl font-extrabold">All commnets</h3>
        {commnents.map((comment) => (
          <div key={comment.id} className="flex items-start  gap-2 py-4 ">
            <p>{comment.email}</p>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
