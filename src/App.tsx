import React, { FC } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import "./App.scss";
import LoginPage from "./login";
import { SnackbarProvider } from "material-ui-snackbar-provider";
import TopNav from "./nav/TopNav";
import Dashboard from "./dashboard";

function App() {
  return (
    <SnackbarProvider SnackbarProps={{ autoHideDuration: 4000 }}>
      <BrowserRouter>
        <Switch>
          <Route
            path="/login"
            render={(props) => {
              const isLoggedIn = !!sessionStorage.getItem("token");

              if (isLoggedIn) {
                props.history.replace("/");
              }
              return <LoginPage />;
            }}
          />
          <Route
            path="/logout"
            render={({ history }) => {
              sessionStorage.removeItem("token");
              sessionStorage.removeItem("apps");
              history.replace("/login" + window.location.hash);
              return null;
            }}
          />
        </Switch>
        <LoginHandler>
          <Route
            render={(props) => {
              return (
                <>
                  <TopNav />
                  <div className="main">
                    <Switch>
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
  const isLoggedIn = !!sessionStorage.getItem("token");
  return isLoggedIn ? <>{children}</> : <Redirect to="/login" />;
};
