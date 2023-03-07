import { Routes, Route } from "react-router";
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './global-css'
import { MainPage } from './screens/MainPage';
import { LoginPage } from './screens/LoginPage';

function App() {
  return (
    <>
      <GlobalStyles />

      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='/main' element={<MainPage />} />
        <Route path="*" element={<p>Данной страницы не существует: 404!</p>} />
      </Routes>

      <ToastContainer
        position='top-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
