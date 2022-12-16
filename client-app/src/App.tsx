import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/posts").then((response) => {
      console.log(response);
      setPosts(response.data);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold uppercase">Chopping Blogs</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {posts.map((post: any) => (
            <li key={post.id}>{post.title}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
