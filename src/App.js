import { BrowserRouter, Route, Routes } from "react-router-dom";
import TimelinePage from "./pages/TimelinePage/Timeline.page.js"
import SignInPage from "./pages/SignInPage/SignIn.page.js"
import SignUpPage from "./pages/SignUpPage/SignUp.page.js"
import { UserContext } from "./context/UserContext.jsx";
import { GuestContext } from "./context/GuestContext.jsx";
import { useState } from "react";
import UserPage from "./pages/UserPage/UserPage.js";
import HashtagPage from "./pages/HashtagPage/HashtagPage.js";



function App() {
  const [user , setUser] = useState([])
  const [guest, setGuest] = useState([])
  return (

      <GuestContext.Provider value={{guest, setGuest}}>
      <UserContext.Provider value={{user, setUser}}>
        <BrowserRouter>
          <Routes>
                  <Route path="/" element={<SignInPage exact />} />
                  <Route path="/sign-in" element={<SignInPage />} />
                  <Route path="/sign-up" element={<SignUpPage />} />
                  <Route path="/timeline" element={<TimelinePage />} />
                  <Route path="/user-page/:id" element={<UserPage />} />
                  <Route path="/hashtag/:hashtag" element={<HashtagPage/>}/>
          </Routes>
        </BrowserRouter>
    </UserContext.Provider>
    </GuestContext.Provider>

  );
}

export default App;