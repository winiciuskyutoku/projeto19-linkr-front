import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.js"
import SignInPage from "./pages/SignInPage.js"
import SignUpPage from "./pages/SignUpPage.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<SignInPage />} exact/>
              <Route path="/registrar" element={<SignUpPage />} />
              <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
