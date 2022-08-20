import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LinksPage from "./pages/LinksPage";
function App() {
  return (
    <BrowserRouter>
          <ToastContainer/>
          <Routes>

          <Route path="/links" element={
                        <LinksPage />
                    }/>  
            
          <Route path="/login" element={
                        <LoginPage />
                    }/>

          <Route path="/register" element={
                        <RegisterPage />
                    }/> 

          <Route path="/" element={
                        <HomePage />
                    }/>
          </Routes>
        <ToastContainer/>
      </BrowserRouter>
  );
}

export default App;
