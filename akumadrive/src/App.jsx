import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Browse from "./pages/Browse/Browse";
import Recommendations from "./pages/Recommendations/Recommendations";
import Sign_in from "./pages/Sign-in/Sign_in";
import Sign_up from "./pages/Sign-up/Sign_up";
import Profile from "./pages/Profile/Profile";
import NoPage from "./pages/NoPage/NoPage";

// const url = "https://anime-db.p.rapidapi.com/anime?page=1&size=10";
// const options = {
//   method: "GET",
//   headers: {
//     "X-RapidAPI-Key": "616199d000msh3bacd729db7065bp112f92jsnaa522a896bec",
//     "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
//   },
// };

// try {
//   const response = await fetch(url, options);
//   const result = await response.text();
//   console.log(result);
// } catch (error) {
//   console.error(error);
// }

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/sign_in" element={<Sign_in />} />
          <Route path="/sign_up" element={<Sign_up />} />
          <Route path="/profile" element={<Profile />} />

          {/* error 404 page */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
