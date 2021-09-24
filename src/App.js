import './App.css';
import '@fontsource/roboto';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Register from './components/Register';
import FileUpload from './components/FileUpload';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/login'>
          <Login/>
        </Route>
        <Route path='/register'>
          <Register/>
        </Route>
        <Route path='/fileUpload'>
          <FileUpload/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
