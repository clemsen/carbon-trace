import Companies from "./components/Companies";
import Header from "./components/Header";
import StyleApp from "./App.style";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Company from "./components/Company";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";

import { supabase } from "./service/supabaseClient";
import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";

function App() {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    setSession(supabase.auth.session());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  return (
    <StyleApp className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/companies" element={<Companies session={session} />} />
          <Route path="/company/:company" element={<Company />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </StyleApp>
  );
}

export default App;
