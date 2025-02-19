import { Routes, Route } from "react-router";
import "./App.css";

// imports from the components folder
import Header from "./components/Header.jsx";
import Articles from "./components/Articles.jsx";
import Home from "./components/Home.jsx";
import Article from "./components/Article.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/articles/" element={<Articles />} />
        <Route path="/articles/:article_id" element={<Article />} />
      </Routes>
    </>
  );
}

export default App;
