import React, { FC } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import LoginPage from "./login/LoginPage";
import { SnackbarProvider } from "material-ui-snackbar-provider";
import TopNav from "./nav/TopNav";
import Dashboard from "./dashboard/Dashboard";
import StaffProfile from "./staff_profile/StaffProfile";
import userStore from "./util/userStore";

function App() {
  return (
    <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route
            path="/login"
            render={(props) => {
              const isLoggedIn = !!userStore.getToken();
              if (isLoggedIn) {
                props.history.replace("/");
              }
              return <LoginPage />;
            }}
          />
          <Route
            path="/logout"
            render={() => {
              userStore.clear();
              return <Redirect to="/login" />;
            }}
          />
        </Switch>
        <LoginHandler>
          <Route
            render={() => {
              return (
                <>
                  <TopNav />
                  <div className="main">
                    <Switch>
                      <Route path="/staff_profiles" component={StaffProfile} />
                      <Route path="/" component={Dashboard} />
                    </Switch>
                  </div>
                </>
              );
            }}
          />
        </LoginHandler>
      </BrowserRouter>
    </SnackbarProvider>
  );
}

export default App;

export const LoginHandler: FC = ({ children }) => {
  //replace with actual login authentication
  const isLoggedIn = !!userStore.getToken();
  return isLoggedIn ? <>{children}</> : <Redirect to="/login" />;
};
