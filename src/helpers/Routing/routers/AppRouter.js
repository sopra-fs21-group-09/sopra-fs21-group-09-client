import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Home from "../../../components/home/Home";
import {HomeGuard} from "../routeProtectors/HomeGuard";
import {RegistrationGuard} from "../routeProtectors/RegistrationGuard";
import {LoginGuard} from "../routeProtectors/LoginGuard";
import Registration from "../../../components/authentication/Registration";
import Login from "../../../components/authentication/Login";
import Profile from "../../../components/profile/Profile";



/**
 * Main router of your application.
 * In the following class, different routes are rendered. In our case, there is a Login Route with matches the path "/login"
 * and another Router that matches the route "/game".
 * The main difference between these two routes is the following:
 * /login renders another component without any sub-route
 * /game renders a Router that contains other sub-routes that render in turn other react components
 * Documentation about routing in React: https://reacttraining.com/react-router/web/guides/quick-start
 */
class AppRouter extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <div>
            <Route
              path="/registration"
              render={() => (
                  <RegistrationGuard>
                      <Registration />
                  </RegistrationGuard>
              )}
            />
            <Route
              path="/login"
              render={() => (
                   <LoginGuard>
                       <Login />
                   </LoginGuard>
              )}
            />
            <Route
              path="/home"
              render={() => (
                  <HomeGuard>
                    <Home />
                  </HomeGuard>
              )}
            />
            <Route
              path="/profile"
              render={() => (
                      <Profile />
              )}
            />
            <Route path="/" exact render={() => <Redirect to={"/registration"} />} />
          </div>
        </Switch>
      </BrowserRouter>
    );
  }
}
/*
* Don't forget to export your component!
 */
export default AppRouter;