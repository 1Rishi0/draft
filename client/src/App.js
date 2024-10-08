/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import logo from "./logo.svg";
import "./App.css";
import Post from "./Post";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/indexpage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { UserContext, UserContextProvider } from "./UserContext";
import CreatePost from "./pages/CreatePost";
import PostPage from "./pages/PostPage";
import EditPost from "./pages/EditPost";

function App() {
  return (
    <UserContextProvider>
       <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/register" element={<RegisterPage/>} />
            <Route path="/create" element={<CreatePost/>} />
            <Route path="/post/:id" element={<PostPage/>}/>
            <Route path="/edit/:id" element={<EditPost/>}/>
          </Route>
         </Routes>

    </UserContextProvider>
     

    
    
  );
}

export default App;
