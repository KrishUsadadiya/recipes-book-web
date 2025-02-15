import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../Recipes-Book-Web/src/firebase.config';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';
import Routers from '../src/routers/Routers';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isAuthPage = location.pathname === "/login" || location.pathname === "/signup";

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user && isAuthPage) {
        navigate("/home"); 
      }
    });
  }, [navigate, isAuthPage]);

  return (
    <>
      {!isAuthPage && <Header />}
      <div>
        <Routers />
      </div>
      {!isAuthPage && <Footer />}
    </>
  );
};

export default App;
