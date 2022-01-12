import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react"
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import ErrorPage from "./pages/404";

function App() {

  return (
    <>
        <BrowserRouter>
        <Route
        render={({location}) => (
          <AnimatePresence exitBeforeEnter>
  <Switch location={location} key={location.key}>
              <Route exact path="/" component={Home} />
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
