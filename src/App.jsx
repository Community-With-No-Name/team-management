import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";

import Registration from "./pages/Registration";

import ErrorPage from "./pages/404";
import Login from "./pages/Login";
import signUp from "./pages/signUp";
import AddTeam from "./pages/AddTeam";
import AddMember from "./pages/AddMember";
import Verified from "./pages/Verified";
import Teams from "./pages/Teams";
import Members from "./pages/Members";
import AddProject from "./pages/AddProject";


function App() {
  return (
    <>
      <BrowserRouter>
        <Route
          render={({ location }) => (
            <AnimatePresence exitBeforeEnter>
              <Switch location={location} key={location.key}>
                <Route exact path="/" component={Home} />
<Route exact path="/login" component={Login} />
<Route exact path="/verified" component={Verified} />
<Route exact path="/add-team" component={AddTeam} />
<Route exact path="/teams" component={Teams} />
<Route exact path="/add-member" component={AddMember} />
<Route exact path="/members" component={Members} />
              <Route exact path='/sign-up' component={Registration} />
                <Route exact path="/add-project" component={AddProject} />
                
<Route exact path="*" component={ErrorPage} />

              </Switch>
            </AnimatePresence>
          )}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
