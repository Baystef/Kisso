import React from 'react';
import DashboardSideNav from '../components/Dashboard/DashboardSideNav';


const DashboardLayout = ({ children, match }) => {
  return (
    <div className="h-screen w-full flex overflow-hidden">
      <nav className="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">
        {/* <!-- SideNavBar --> */}
        <DashboardSideNav match={match} />
      </nav>
      <main
        className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
		    duration-500 ease-in-out overflow-y-auto">
          {children}
      </main>
    </div>
  )
}

export default DashboardLayout;