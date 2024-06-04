export default async function getPost() {
  const posts = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5"
  );

  return posts.json();
}
