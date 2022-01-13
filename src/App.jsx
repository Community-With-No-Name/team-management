import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from "react"
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home";
import Registration from "./pages/Registration";


function App() {

  return (
    <>
        <BrowserRouter>
        <Route
        render={({location}) => (
          <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.key}>
              <Route exact path="/" component={Home} />
              <Route exact path="/register" component={Registration} />

              {/* <Route exact path="*" /> */}
              </Switch>
          </AnimatePresence>
        )}
         />
        </BrowserRouter>
    </>
  );
}

export default App;
