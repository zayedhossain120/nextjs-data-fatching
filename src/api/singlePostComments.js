export default async function singlePostComments(postId) {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(3000);

  const comments = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
  );

  return comments.json();
}
