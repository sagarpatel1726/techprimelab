import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './feature/auth/components/Login/login';
import CreateProject from './feature/project/components/create-project/create-project';
import navbar from './feature/navbar/navbar';

function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path='' Component={Login}></Route>
          <Route path='home' Component={navbar}>
            <Route path='' Component={CreateProject}></Route>
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
