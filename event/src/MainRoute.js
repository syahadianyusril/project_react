import React from "react";
import {Route, Switch} from "react-router-dom";

import App from "./App"
import AppNotMatch from "./AppNotMatch";
// import Signin from "./signin/Signin";
// import AppBlog from "./AppBlog"
// import AppGallery from "./AppGallery"
// import AppContact from "./AppContact"
// import Profil from "./profil/Profil"

const MainRoute = () => {
  return (
    <Switch>
      <Route exact path="/" component={App}></Route>
      <Route component={AppNotMatch}></Route>  
    </Switch>
  )
}

export default MainRoute;