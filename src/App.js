import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";

import List from "./pages/list/List";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            <Route path="users">
              <Route index element={<List />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
