import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Login from "./components/login";
import Registration from "./components/registration";
import AttorneyRegistration from "./components/attorneyRegistration";
import AttorneyProfile from "./components/attorneyProfile";
import AttorneyCredential from "./components/attorneyCredential";
import AttorneyClientDocument from "./components/attorneyClientDocument";
import AttorneyMeeting from "./components/attorneyMeeting";
import ClientList from "./components/ClientList";
import AttorneyNotification from "./components/attorneyNotifications";
import ClientProfile from "./components/clientProfile";
import ClientNotification from "./components/clientNotification";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/registration" component={Registration} />
        <Route path="/login" component={Login} />
        <Route path="/attorney/registration" component={AttorneyRegistration} />
        <Route path="/attorney/profile" component={AttorneyProfile} />
        <Route path="/attorney/credential" component={AttorneyCredential} />
        <Route
          path="/attorney/client/document"
          component={AttorneyClientDocument}
        />
        <Route path="/attorney/meeting" component={AttorneyMeeting} />
        <Route path="/client/list" component={ClientList} />
        <Route
          path="/attorney/notifications"
          component={AttorneyNotification}
        />
        <Route path="/client/profile" component={ClientProfile} />
        <Route path="/client/notification" component={ClientNotification} />
        <Redirect from="/" exact to="/login" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
