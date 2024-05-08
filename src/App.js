import { v4 as uuidv4 } from "uuid";
import NavBar from "./Components/NavBar/NavBar";
import News from "./Components/News/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { router } from "";
import Search from "./Components/Search/SearchBar";

function App() {
  return (
    <>

      <Router>
        <NavBar />
        <Routes>
          {router.map((path) => (
            <Route
              exact
              key={uuidv4()}
              path={path.path}
              element={
                <News
                  key={path.key}
                  newscategory={path.category}
                  country={path.country}
                />
              }
            />
          ))}
          <Route path="/search/:query" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;