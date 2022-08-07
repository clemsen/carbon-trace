import SearchBar from "../SearchBar";
import StyleHomepage from "./Homepage.style";

const Homepage = () => {
  return (
    <StyleHomepage>
      <h2 className="homepage-title">Recherchez une entreprise</h2>
      <p className="homepage-body">
        Texte placeholder, on verra le design de la page plus tard ...
      </p>
      <div className="homepage-search-bar">
        <SearchBar />
      </div>
    </StyleHomepage>
  );
};

export default Homepage;
