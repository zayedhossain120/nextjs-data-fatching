export default async function singlePost(postId) {
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  await delay(2000);
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  return post.json();
}
