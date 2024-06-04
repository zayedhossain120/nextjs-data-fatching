import singlePost from "@/api/singlePost";
import singlePostComments from "@/api/singlePostComments";
import AllComments from "@/components/AllComments";
import { Suspense } from "react";

export default async function PostPage({ params: { postId } }) {
  const post = singlePost(postId);
  const commnents = singlePostComments(postId);

  const postData = await post;

  return (
    <div className="text-center mt-10 text-green-600 w-[600px] mx-auto">
      <h3 className="text-2xl"> {post.title}</h3>
      <p>{postData.body}</p>
      <Suspense fallback={<div>Loading comments...</div>}>
        <AllComments commnents={commnents} />
      </Suspense>
    </div>
  );
}
