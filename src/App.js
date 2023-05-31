import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import TimelinePage from "./pages/Timeline.page.js"
import SignInPage from "./pages/SignIn.page.js"
import SignUpPage from "./pages/SignUp.page.js"
import { UserContext } from "./context/UserContext.jsx";
import { useState } from "react";
=======

import TimelinePage from "./pages/TimelinePage/Timeline.page.js"
import SignInPage from "./pages/SignInPage/SignIn.page.js"
import SignUp from "./pages/SignUpPage/SignUp.page.js";
>>>>>>> main

function App() {
  const [user , setUser] = useState("")
  return (
<<<<<<< HEAD

      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
                  <Route path="/" element={<SignInPage />} exact/>
                  <Route path="/singup" element={<SignUpPage />} />
                  <Route path="/timeline" element={<TimelinePage />} />
          </Routes>
        </BrowserRouter>
    </UserContext.Provider>
=======
    <BrowserRouter>
      <Routes>
              <Route path="/" element={<SignInPage />} exact/>
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/timeline" element={<TimelinePage />} />
      </Routes>
    </BrowserRouter>
>>>>>>> main
  );
}

export default App;