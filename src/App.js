import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LinksPage from "./pages/LinksPage";
import CreateLinkPage from './pages/CreateLinkPage';
import {AuthProvider} from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
          <Routes>

          <Route path="/links" element={
                        <PrivateRoute>
                          <LinksPage />
                        </PrivateRoute>
                    }/>
          
          <Route path="/create-link" element={
                        <PrivateRoute>
                          <CreateLinkPage />
                        </PrivateRoute>
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
      </AuthProvider>
  );
}

export default App;
