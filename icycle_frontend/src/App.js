import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Feed from './components/Feed';
import Routing from './components/Routing';
import Profile from './components/Profile';
import RootLayout from './components/RootLayout';
import Register from './components/Register';
import Login from './components/Login';
import { AuthProvider } from './context/AuthContext';
import { RouteProvider } from './context/RouteContext';
import { PostProvider } from './context/PostProvider';
import AddPost from './components/AddPost';
import AddRoute from './components/AddRoute';
import EditPost from './components/EditPost';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <AuthProvider>
        <RouteProvider>
          <PostProvider>
        <Routes>
          <Route path='/' element={<RootLayout/>}>
            <Route index element={<Homepage />}/>
            <Route path='feed' element={<Feed />}>
            <Route path='editpost/:id' element={<EditPost/>}></Route>
            </Route>
            
            <Route path="addpost" element={<AddPost/>}/>
            <Route path='routes' element={<Routing />}/>
            <Route path='addroute' element={<AddRoute/>}/>
              
            <Route path='profile' element={<Profile />}/>
            <Route path='register' element={<Register />}/>
            <Route path='login' element={<Login />}/>
          </Route>
        </Routes>
        </PostProvider>
        </RouteProvider>
      </AuthProvider>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
