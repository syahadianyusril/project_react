import React from "react";
import {Route, Switch} from "react-router-dom";

import App from "./App"
import AppNotMatch from "./AppNotMatch";
import AppSignIn from "./AppSignIn";
import AppProfil from "./AppProfil"
import AppKalendar from "./AppKalendar";

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route exact path="/signin" component={AppSignIn}></Route>
      <Route exact path="/profil" component={AppProfil}></Route>
      <Route exact path="/kalendar" component={AppKalendar}></Route>
      <Route component={AppNotMatch}></Route>  
    </Switch>
  )
}

export default MainRoute;