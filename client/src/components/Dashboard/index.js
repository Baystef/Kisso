import React from 'react';
import { Switch } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout'
import ProtectedRoute from '../ProtectedRoute';
import DashboardUserList from './DashboardUserList';
import DashboardUserProfile from './DashboardUserProfile';
import DashboardAddUser from './DashboardAddUser';
import DashboardSettings from './DashboardSettings';



const Dashboard = ({ match }) => {
  return (
    <DashboardLayout match={match}>
      <Switch>
        <ProtectedRoute exact path={`${match.url}`} component={DashboardUserProfile} />
        <ProtectedRoute path={`${match.url}/users`} component={DashboardUserList} />
        <ProtectedRoute path={`${match.url}/add-new`} component={DashboardAddUser} />
        <ProtectedRoute path={`${match.url}/settings`} component={DashboardSettings} />
      </Switch>
    </DashboardLayout>
  )
}

export default Dashboard;
