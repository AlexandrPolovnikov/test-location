import React, { useEffect, useState } from "react";
import "./App.css";
// import { BsPlusSquare } from "react-icons/bs";
import Test_list from "./components/test_list/Test_list.jsx";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({ title: "", body: "" });

  const addNewPost = (e) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now(),
    };
    createPost(newPost);
    setPost({ title: "", body: "" });
  };

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Test_list posts={posts} remove={removePost} />
      <div className="plus_location">
        <button onClick={addNewPost}>
          <div>{/* <BsPlusSquare className="plus_img" /> */}</div>

          <div className="plus_text"> Добавить тестовую локацию</div>
        </button>
      </div>
    </div>
  );
};

export default App;
