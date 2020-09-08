import React, { useState, useEffect } from 'react'
import userApi from '../../api/userApi';
import DashboardCard from './DashboardCard';



const DashboardUserList = () => {
  const [users, setUsers] = useState([]);

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
    <div className="mx-10 my-2">
      <nav
        className="flex flex-row justify-between border-b
            dark:border-gray-600 dark:text-gray-400 transition duration-500
            ease-in-out">
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
  )
}



export default DashboardUserList;
