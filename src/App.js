import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LinksPage from "./pages/LinksPage";
import CreateLinkPage from './pages/CreateLinkPage';
function App() {
  return (
    <BrowserRouter>
          <Routes>

          <Route path="/links" element={
                        <LinksPage />
                    }/> 

          <Route path="/create-link" element={
                        <CreateLinkPage />
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
      </BrowserRouter>
  );
}

export default App;
