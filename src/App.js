import React, { useContext, useState } from "react";
import "./App.css";
import { observer } from "mobx-react-lite";
import { storeContext } from "./store.ts";

import Test_list from "./components/test_list/Test_list.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const App = () => {
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState({});

  const addNewTLocal = () => {
    const newTLocal = {
      ...post,
      id: Date.now(),
    };
    createTL(newTLocal);
  };

  const createTL = (newTLocal) => {
    setPosts([...posts, newTLocal]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  return (
    <div className="App">
      <Test_list posts={posts} remove={removePost} key={createTL.id} />
      <div className="plus_location">
        <button onClick={addNewTLocal}>
          <div></div>
          <div className="plus_text">
            <i class="fa-solid fa-plus"></i> Добавить тестовую локацию
          </div>
        </button>
      </div>
    </div>
  );
};

export default App;
