import Company from "./components/Company";
import Header from "./components/Header";
import StyleApp from "./App.style";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <StyleApp className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<>Insert homepage here</>}></Route>
          <Route path="/companies" element={<Company />} />
        </Routes>
      </BrowserRouter>
    </StyleApp>
  );
}

export default App;
