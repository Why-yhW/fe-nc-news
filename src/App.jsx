import { Routes, Route } from "react-router";
import "./App.css";

// imports from the components folder
import Header from "./components/Header.jsx";
import Articles from "./components/Articles.jsx";
import Home from "./components/Home.jsx";
import Article from "./components/Article.jsx";
import Login from "./components/Login.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/articles/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
