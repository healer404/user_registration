import React from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import {RegisteredUsersList} from "./RegisteredUsersList";
import {RegisterUser} from "./RegisterUser";
import {UpdateUserInfo} from "./UpdateUserInfo";
import {DeleteUser} from "./DeleteUser";

function App() {
  return (

    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Registered Users</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/register" className="nav-link">Register New User</Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Switch>
            <Route exact path="/" component={RegisteredUsersList}/>
            <Route path="/register" component={RegisterUser}/>
            <Route path="/edit/:id" component={UpdateUserInfo}/>
            <Route path="/delete/:id" component={DeleteUser}/>
        </Switch>
    </div>
  );
}

export default App;
