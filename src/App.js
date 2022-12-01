import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home/Home.page';
import LoginPage from './pages/auth/Login.page';
import SignupPage from './pages/auth/Signup.page';
import PostListPage from './pages/post/List.page';
import PostWritePage from './pages/post/Write.page';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/post' element={<PostListPage />} />
        <Route path='/post/write' element={<PostWritePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
