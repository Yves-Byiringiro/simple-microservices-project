import React from "react";
import Header from "./components/Header";
import PostList from "./components/PostList";


const App = () => {
  return(
    <div>
      <Header />
      <div className="container mt-4">
        <h4>Posts</h4>
        <hr />

        <h2>Post List goes down here</h2>
        <PostList />

    </div>
    </div>

  ) 
};
 
export default App;