import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './components/Homepage';
import Feed from './components/Feed';
import Routing from './components/Routing';
import Profile from './components/Profile';
import RootLayout from './components/RootLayout';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<RootLayout/>}>
        <Route index element={<Homepage />}/>
        <Route path='feed' element={<Feed />}/>
        <Route path='routes' element={<Routing />}/> 
        <Route path='profile' element={<Profile />}/>
        </Route>
      </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
