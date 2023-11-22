import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar";
import List from "./pages/requests/list";
import PendingList from "./pages/requests/pending_List";
import Create from "./pages/requests/create";
import ApprovedList from "./pages/requests/approved_List";
import Delete from "./pages/requests/approved_List";
import Register from "./pages/users/register";
import Login from "./pages/users/login";
import Profile from "./pages/users/view_Profile";
import AllUsers from "./pages/users/allUsers";
import Home from "./pages/home/home";
import './index.css';

function App() {
  return (
    <div className="App">
      <NavBar />

      <div className="container py-5">
        <Routes>
          {/* REQUESTS */}
          <Route path="/requests" element={<List />} />
          <Route path="/requests/pending" element={<PendingList />}/>
          <Route path="/requests/create" element={<Create />}/>
          <Route path="/requests/approved" element={<ApprovedList />}/>
          <Route path= "/requests/:id/delete" element={<Delete/>}/>

          {/* USERS */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/users" element={<AllUsers />} />

          {/*HOME*/}
          <Route path="/home" element={<Home />} />
          
          {/*DEFAULT ROUTE*/}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
