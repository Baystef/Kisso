import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import userApi from '../../api/userApi'

const toastOptions = {
  position: "top-right",
  autoClose: 10000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
}

const DashboardSettings = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
 

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const data = { password, newPassword }
      const res = await userApi.put('user/change_password', data)
     
      if (res.status === 200) {
        toast('Password reset successfully!', toastOptions)
      }
    } catch (error) {
      console.error(error)
      toast(error.message, toastOptions)
    }
  }

  return (
    <>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto my-auto text-left">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 lg:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
              Current Password
            </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 lg:w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-new-password">
             New Password
            </label>
            <input value={newPassword} onChange={(e) => setNewPassword(e.target.value)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-new-password" type="password" placeholder="******************" />
            <p className="text-gray-600 text-xs italic">Make it as long and as crazy as you'd like</p>
          </div>
        </div>

        <button type="submit" className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 mt-4 border border-gray-400 rounded shadow">
          Save Changes
        </button>
      </form>
    </>
  )
};

export default DashboardSettings;
