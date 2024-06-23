import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import StudentList from "./StudentList";
import FavoriteStudent from "./FavoriteStudent";

import { StudentProvider } from "./StudentProvider";

const App = () => {
  return (
    <div className="App">
      <StudentProvider>
        <BrowserRouter>
          <nav className="bg-teal-700 p-10 mb-8">
            <ul className="flex justify-center">
              <li className="mr-6">
                <Link
                  to={"/"}
                  className="text-white font-semibold hover:underline text-xl"
                >
                  Student List
                </Link>
              </li>

              <li>
                <Link
                  to={"/favorite"}
                  className="text-white font-semibold hover:underline text-xl"
                >
                  Favorite Student
                </Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route path="/" element={<StudentList />}></Route>
            <Route path="/favorite" element={<FavoriteStudent />}></Route>
          </Routes>
        </BrowserRouter>
      </StudentProvider>
    </div>
  );
};

export default App;
