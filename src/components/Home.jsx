import { Link } from "react-router";

function Home() {
  return (
    <div className="home">
      <p> description goes here</p>
      <nav>
        <Link to="/articles" className="nav-link">
          <button className="articles-button">Articles</button>
        </Link>
      </nav>
    </div>
  );
}

export default Home;
