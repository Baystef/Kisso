import React, { useState, useContext, useEffect } from 'react';
import DashboardSideNav from './DashboardSideNav';
import DashboardCard from './DashboardCard';
import { AuthContext } from '../context/AuthContext';
import userApi from '../api/userApi';

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const { user, logout } = useContext(AuthContext);

  useEffect(() => {
    async function getUsers() {
      try {
        const res = await userApi.get('users')
        setUsers(res.data.data)
      } catch (error) {
        console.log(error.message)
      }
    }

    getUsers()
  }, [])

  const deleteAUser = async (id) => {
    try {
      const res = await userApi.delete(`users/${id}`)
      if (res.status === 200) {
        setUsers(users.filter(user => user._id !== id))
      }
    } catch (error) {
      console.error(error.message)
    }
  }


  return (
    <div className="h-screen w-full flex overflow-hidden">
      <nav className="flex flex-col bg-gray-200 dark:bg-gray-900 w-64 px-12 pt-4 pb-6">
        {/* <!-- SideNavBar --> */}
        <DashboardSideNav user={user} logout={logout} />
      </nav>
      <main
        className="flex-1 flex flex-col bg-gray-100 dark:bg-gray-700 transition
		    duration-500 ease-in-out overflow-y-auto">
        <div className="mx-10 my-2">
          <nav
            className="flex flex-row justify-between border-b
				dark:border-gray-600 dark:text-gray-400 transition duration-500
				ease-in-out">
            <div className="flex">
              {/* <!-- Top NavBar --> */}
            </div>
          </nav>
          <h2 className="my-4 text-4xl font-semibold dark:text-gray-400">
            Users
			    </h2>
          <div
            className="pb-2 flex items-center justify-between text-gray-600
				     dark:text-gray-400 border-b dark:border-gray-600">
            {/* <!-- Header --> */}
            <div>
              <span>
                <span className="text-green-500 dark:text-green-200">
                  {users.length} users
						    </span>
              </span>
            </div>
          </div>
          {users.map(user => <DashboardCard key={user._id} user={user} deleteAUser={deleteAUser} />)}
        </div>
      </main>
    </div>
  )
}

export default Dashboard;
