import React from "react";
import Link from "next/link";

const PostCard = ({ post }) => {
  
  return (
    <div className="bg-white shadow-lg rounded-lg lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <h1 className="text-2xl font-bold">{post.title}</h1>
        <p className="text-gray-500">{post.content}</p>
        <img
          src={post.featured_image}
          alt={post.title}
          className="object-top w-full h-80 absolute object-cover shadow-lg rounded-t-lg lg:rounded-lg"
        />
      </div>
    </div>
  );
};

export default PostCard;
