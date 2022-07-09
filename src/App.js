import React, { useState } from "react";
import Header from "./Header";

import Post from "./Post";
import { ThemeProvider } from "./ThemeContext";

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.random(),
      title: "Title#01",
      subtitle: "Sub#01",
      likes: 20,
      read: false,
    },
    {
      id: Math.random(),
      title: "Title#02",
      subtitle: "Sub#02",
      likes: 10,
      read: true,
    },
    {
      id: Math.random(),
      title: "Title#03",
      subtitle: "Sub#03",
      likes: 50,
      read: false,
    },
  ]);

  function handleRefresh() {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.random(),
        title: `Title=0${prevState.length + 1}`,
        subtitle: `Title=0${prevState.length + 1}`,
        likes: 20,
        read: false,
      },
    ]);
  }

  function handleRemovePost(postId) {
    setPosts((prevState) =>
      prevState.filter((postElement) => postElement.id !== postId)
    );
  }
  return (
    <ThemeProvider>
      <Header title="JStack's Blog">
        <h2>
          Posts da semana
          <button onClick={() => handleRefresh()}>Atualizar</button>
        </h2>
      </Header>
      <hr />
      {posts.map((postElement) => (
        <Post
          key={postElement.id}
          onRemove={handleRemovePost}
          post={postElement}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
