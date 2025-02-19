import { Routes, Route } from "react-router";
import "./App.css";

// imports from the components folder
import Header from "./components/Header.jsx";
import Articles from "./components/Articles.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/articles" element={<Articles />} />
      </Routes>
    </>
  );
}

export default App;
