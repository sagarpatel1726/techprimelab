import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './feature/auth/components/Login/login';
import CreateProject from './feature/project/components/create-project/create-project';
import Navbar from './feature/navbar/navbar';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='' Component={Login}></Route>
          <Route path='home' Component={Navbar}>
            <Route path='' Component={CreateProject}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
