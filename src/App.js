import { BrowserRouter, Route, Routes } from "react-router-dom";
import TimelinePage from "./pages/TimelinePage/Timeline.page.js"
import SignInPage from "./pages/SignInPage/SignIn.page.js"
import SignUpPage from "./pages/SignUpPage/SignUp.page.js"
import { UserContext } from "./context/UserContext.jsx";
import { useState } from "react";
import HashtagPage from "./pages/TimelinePage/HashtagPage.js";



function App() {
  const [user , setUser] = useState([])
  return (


      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
                  <Route path="/" element={<SignInPage />} exact/>
                  <Route path="/singup" element={<SignUpPage />} />
                  <Route path="/timeline" element={<TimelinePage />} />
                  <Route path="/hashtag/:hashtag" element={<HashtagPage/>}/>
          </Routes>
        </BrowserRouter>
    </UserContext.Provider>

  );
}

export default App;