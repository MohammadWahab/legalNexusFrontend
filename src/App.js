import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import AttorneyDashboard from "./pages/attorney/attorneyDashboard";
import ClientDashboard from "./pages/client/clientDashboard";
import ClientCaseList from "./pages/client/clientCaseList";
import ClientCaseDetails from "./pages/client/clientCaseDetails";
import AttorneyCaseDetails from "./pages/attorney/attorneyCaseDetails";
import AttorneyCaseList from "./pages/attorney/attorneyCaseList";
import ClientNotifications from "./pages/client/clientNotifications";
import AttorneyNotifications from "./pages/attorney/attorneyNotifications";
import AttorneyMeetings from "./pages/attorney/attorneyMeetings";
import ClientMeetings from "./pages/client/clientMeetings";
import Login from "./pages/login";
import Registration from "./pages/registration";
import AttorneyProfile from "./pages/client/attorneyProfile";
import AttorneyCredential from "./pages/attorney/attorneyCredentials";
import SearchAttorney from "./pages/client/searchAttorney";
import AdminDashboard from "./pages/admin/adminDashboard";
import AdminClientList from "./pages/admin/adminClientList";
import AdminAttorneyList from "./pages/admin/adminAttorneyList";

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/attorney/dashboard" component={AttorneyDashboard} />
        <Route path="/client/dashboard" component={ClientDashboard} />
        <Route path="/client/cases" component={ClientCaseList} />
        <Route path="/client/case/details" component={ClientCaseDetails} />
        <Route path="/attorney/case/details" component={AttorneyCaseDetails} />
        <Route path="/attorney/cases" component={AttorneyCaseList} />
        <Route path="/client/notifications" component={ClientNotifications} />
        <Route
          path="/attorney/notifications"
          component={AttorneyNotifications}
        />
        <Route path="/attorney/meetings" component={AttorneyMeetings} />
        <Route path="/client/meetings" component={ClientMeetings} />
        <Route path="/registration" component={Registration} />
        <Route path="/attorney/profile" component={AttorneyProfile} />
        <Route path="/attorney/credentials" component={AttorneyCredential} />
        <Route path="/search/attorney" component={SearchAttorney} />
        <Route path="/admin/dashboard" component={AdminDashboard} />
        <Route path="/admin/client/list" component={AdminClientList} />
        <Route path="/admin/attorney/list" component={AdminAttorneyList} />
        <Redirect from="/" exact to="/login" />
      </Switch>
    </React.Fragment>
  );
}

export default App;
