import { BrowserRouter, Route, Routes } from "react-router-dom";
import TimelinePage from "./pages/Timeline.page.js"
import SignInPage from "./pages/SignIn.page.js"
import SignUpPage from "./pages/SignUp/SignUp.page.js"

function App() {
  return (
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<SignInPage />} exact/>
              <Route path="/sign-up" element={<SignUpPage />} />
              <Route path="/timeline" element={<TimelinePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;