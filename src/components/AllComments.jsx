export default async function AllComments({ commnents }) {
  const commentsData = await commnents;
  return (
    <div className="mt-10 border-t border ">
      <h3 className="text-2xl font-extrabold">All commnets</h3>
      {commentsData.map((comment) => (
        <div key={comment.id} className="flex items-start  gap-2 py-4 ">
          <p>{comment.email}</p>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
}
