import React from "react";
import Test_location from "../location/Test_location";

const Test_list = ({ posts, title, remove, id }) => {
  return (
    <div>
      <h1 className="header__item">{title}</h1>
      {posts.map((post, index) => (
        <Test_location remove={remove} number={index + 1} post={post} id={id} />
      ))}
    </div>
  );
};

export default Test_list;
