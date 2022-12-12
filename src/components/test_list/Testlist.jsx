import React, { useState } from "react";
import Testlocation from "../location/Testlocation";

const Testlist = ({ posts, remove }) => {
  return (
    <div>
      {posts.map((post, index) => (
        <Testlocation
          remove={remove}
          number={index + 1}
          post={post}
          key={post.id}
        />
      ))}
    </div>
  );
};

export default Testlist;
