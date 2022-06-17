import './App.css';
import '@fontsource/roboto';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from './components/Register';
import FileUpload from './components/FileUpload';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/fileUpload' element={ <FileUpload/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
