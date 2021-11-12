
import { Route, Switch } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Appointment from './Components/Pages/Appointment/Appointment/Appointment';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Home from './Components/Pages/Home/Home';
import Login from './Components/Pages/Login/Login';
import PrivateRoute from './Components/Pages/Login/PrivateRoute/PrivateRoute';
import Register from './Components/Pages/Login/Register/Register';
import AuthProvider from './Contexts/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
     <AuthProvider>
     <BrowserRouter>
     <Switch>
          <PrivateRoute path="/appointment">
          <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
          <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <Route exact path="/">
            <Home></Home>
          </Route>
        </Switch>
     </BrowserRouter>
     </AuthProvider>
    </div>
  );
}

export default App;
