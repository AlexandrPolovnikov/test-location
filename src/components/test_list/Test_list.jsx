import React from "react";
import Test_location from "../location/Test_location";

const Test_list = ({ posts, remove }) => {
  console.log(posts);
  return (
    <div>
      {posts.map((post, index) => (
        <Test_location
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default Test_list;
