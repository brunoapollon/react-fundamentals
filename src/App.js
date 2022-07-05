import React from "react";
import Header from "./Header";

import Post from "./Post";

const posts = [
  { title: "Title#01", subtitle: "Sub#01", likes: 20 },
  { title: "Title#02", subtitle: "Sub#02", likes: 10 },
  { title: "Title#03", subtitle: "Sub#03", likes: 50 },
];

function App() {
  return (
    <>
      <Header title="JStack's Blog">
        <h2>Posts da semana</h2>
      </Header>
      <hr />
      {posts.map((postElement, index) => (
        <Post
          key={index}
          post={{ title: postElement.title, subtitle: postElement.subtitle }}
          likes={postElement.likes}
        />
      ))}
    </>
  );
}

export default App;
