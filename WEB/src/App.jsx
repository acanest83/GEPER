import { Route, Routes } from "react-router-dom";
import List from "./pages/requests/list";
import PendingList from "./pages/requests/pending_List";
import Create from "./pages/requests/create";
import ApprovedList from "./pages/requests/approved_List";
import Register from "./pages/users/register";
import Login from "./pages/users/login";
import Profile from "./pages/users/view_Profile";
import AllUsers from "./pages/users/allUsers";

function App() {
  return (
    <div className="container py-5">
      <Routes>
        {/*REQUESTS*/}
        <Route path="/requests" element={<List />}/>
        <Route path="/requests/pending" element={<PendingList />}/>
        <Route path="/requests/create" element={<Create />}/>
        <Route path="/requests/approved" element={<ApprovedList />}/>

        {/*USERS*/}
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/users" element={<AllUsers />}/>
        <Route path="*" element={<Login />} />

      </Routes>
    </div>
  );
}


export default App;
