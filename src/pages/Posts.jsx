import React, { useState, useEffect } from "react";
import axios from "axios";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/posts")
      .then((response) => {
        setPosts(response.data.data);
      })
      .catch((error) => {
        console.error("Something went wrong while fetching posts:", error);
      });
  }, []);
  return (
    <div className="bg-green-200 h-screen">
      <div className="w-full container mx-auto py-11">
        <h1 className="text-center text-4xl font-bold">
          THIS IS THE POSTS PAGE
        </h1>
        <div className="w-full h-screen bg-red-400">
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;
