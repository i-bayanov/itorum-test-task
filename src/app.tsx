import { Route, Routes } from "react-router-dom";

import SearchField from "./components/search_field/search_field";
import UserList from "./components/user_list/user_list";
import UserPage from "./components/user_page/user_page";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<>
          <SearchField />
          <UserList />
        </>} />
        <Route path="/page:num" element={<>
          <SearchField />
          <UserList />
        </>} />
        <Route path="/:login" element={<UserPage />} />
      </Routes>
    </div>
  );
}
