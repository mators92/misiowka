import React from 'react';
import './App.css';
import Panel from './Panel';
import LoginForm from './LoginForm';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import LoginService from './LoginService';
import PrivateRoute from './PrivateRoute';


function App() {
  return (
    <div className="App">
        <Router>
            <Switch>

                <Route exact path="/" component={LoginForm} />
                <Route exact path="/panel" component={Panel} />
                //<PrivateRoute path="/panel" component={Panel} />
                //<Route path={"/panel"} render={(props) => <Panel {...props}/>}/>
                //<Route exact path={"/"} render={(props) => (LoginService.checkIfUserIsLogged()) ? <Panel {...props}/> : <LoginForm {...props}/>}/>
                //<Route exact path={"/"} render={(props) => <LoginForm {...props}/>}/>

                //<Redirect to={"/"}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
