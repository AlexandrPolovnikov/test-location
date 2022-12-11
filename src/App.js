import React, { useContext, useState } from "react";
import "./App.css";
import { observer } from "mobx-react-lite";
import { storeContext } from "./store.ts";
import Testlist from "./components/test_list/Testlist";

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
      <Testlist posts={posts} remove={removePost} key={createTL.id} />
      <div>
        {/* <select>
          <option value="valuel">По названию</option>
          <option value="valuel">По id</option>
        </select> */}
      </div>
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
