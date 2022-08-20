import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import LinksPage from "./pages/LinksPage";
import CreateLinkPage from './pages/CreateLinkPage';
import {AuthProvider} from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import Redirect from './pages/Redirect';
function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
          <Routes>

          <Route path="/admin/links" element={
                        <PrivateRoute>
                          <LinksPage />
                        </PrivateRoute>
                    }/>
          
          <Route path="/admin/create-link" element={
                        <PrivateRoute>
                          <CreateLinkPage />
                        </PrivateRoute>
                    }/>
            
          <Route path="/admin/login" element={
                        <LoginPage />
                    }/>

          <Route path="/admin/register" element={
                        <RegisterPage />
                    }/> 

          <Route path="/" element={
                        <HomePage />
                    }/>
        
         <Route path="/:id" element={
                        <Redirect />
                    }/>

          </Routes>
      </BrowserRouter>
      </AuthProvider>
  );
}

export default App;
