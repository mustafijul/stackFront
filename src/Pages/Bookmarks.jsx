import React from "react";

const Bookmark = () => {
  const blog = {
    title: "How to Stay Productive While Working Remotely",
    image:
      "https://source.unsplash.com/800x400/?remote-work,productivity,office",
    author: "Jane Doe",
    date: "May 16, 2025",
    content: `Working remotely has become the new norm for many professionals. While it offers flexibility and freedom, it also presents challenges in staying productive and maintaining work-life balance. Here are 5 simple strategies to help you stay focused...`,
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-xl mt-6">
      <h1 className="text-5xl font-bold text-center p-5">
        <span className="bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
          Bookmarks
        </span>
      </h1>
      <div className="rounded overflow-hidden shadow-lg">
        <img
          className="w-full h-64 object-cover"
          src="/src/assets/thumbnail.jpg"
          alt="Blog Cover"
        />
        <div className="p-6">
          <h2 className="font-bold text-2xl mb-2 bg-gradient-to-r from-primary via-blue-500 to-secondary text-transparent bg-clip-text animate-gradient">
            {blog.title}
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            By {blog.author} • {blog.date}
          </p>
          <p className="text-gray-700 text-base">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
