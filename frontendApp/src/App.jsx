import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import PostList from "./pages/PostList";
import PostCreate from "./pages/PostCreate";

const App = () => {
  return(
    <div>
      <Router>
      <Header />
        <Routes>
          <Route path="/" element={<PostList />} />
          <Route path="/add-post" element={<PostCreate />} />
        </Routes>
      </Router>
    </div>

  ) 
};
 
export default App;