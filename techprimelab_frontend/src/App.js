import { BrowserRouter, Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Login from './feature/auth/components/Login/login';
import CreateProject from './feature/project/components/create-project/create-project';
import Navbar from './feature/navbar/navbar';

const PrivateRouter = (props) => {
  const {children} = props


  if(sessionStorage.getItem("authToken")){
    return children
  }
  return <Navigate to="/" replace />
  
}

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='' Component={Login}></Route>
          <Route path='home' Component={Navbar}>
            <Route path='' element={<PrivateRouter><CreateProject /></PrivateRouter>} ></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
