const PostCard = ({ post }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.content}</p>
    </div>
  );
};

export default PostCard;
