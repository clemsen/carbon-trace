import SearchBar from "../SearchBar";
import StyleHomepage from "./Homepage.style";

const Homepage = () => {
  return (
    <StyleHomepage>
      <h2 className="homepage-title">Les bilans carbone des entreprises</h2>
      <p className="homepage-body">
        Nous donnons accès à toute la traçabilité sur le carbone émis par les
        entreprises
      </p>
      <div className="homepage-search-bar">
        <SearchBar />
      </div>
    </StyleHomepage>
  );
};

export default Homepage;
