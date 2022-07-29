import Companies from "./components/Companies";
import Header from "./components/Header";
import StyleApp from "./App.style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Company from "./components/Company";

function App() {
  return (
    <StyleApp className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<>Insert homepage here</>}></Route>
          <Route path="/companies" element={<Companies />} />
          <Route path="/company/:name" element={<Company />} />
        </Routes>
      </BrowserRouter>
    </StyleApp>
  );
}

export default App;
