import React from 'react';

const DashboardCard = ({ user, deleteAUser }) => {
  const { firstName, lastName, email, job, _id } = user;

  return (
    <div
      className="mt-8 flex sm:flex-col lg:flex-row px-4 py-4 items-center justify-around sm:w-1/2 lg:w-full mx-auto bg-white
      dark:bg-gray-600 shadow-xl rounded-lg cursor-pointer">
      {/* <!-- Card --> */}

      <img
        className="h-12 w-12 rounded-full object-cover"
        src="https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png"
        alt="" />

      <div className="flex sm:flex-col lg:flex-row sm:items-center justify-evenly">
        <div
          className="sm:ml-0 lg:ml-4 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
          <span>name</span>
          <span className="sm:mt-0 lg:mt-2 text-black dark:text-gray-200">
            {firstName} {lastName}
          </span>
        </div>

        <div className="sm:ml-0 lg:ml-12 sm:mr-0 lg:mr-16 sm:mt-2 lg:mt-0 flex flex-col text-gray-600	dark:text-gray-400">
          <span className="capitalize">Email</span>
          <span className="sm:mt-0 lg:mt-2 text-black dark:text-gray-200">
            {email}
          </span>
        </div>

        <div
          className="sm:mr-0 lg:mr-16 sm:mt-2 lg:mt-0 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
          <span>job</span>
          <span className="sm:mt-0 lg:mt-2 text-black dark:text-gray-200">
            {job}
          </span>
        </div>

        <div
          className="sm:mr-0 lg:mr-16 sm:mt-2 lg:mt-0 flex flex-col capitalize text-gray-600
						dark:text-gray-400">
          <span>action</span>
          <button onClick={() => deleteAUser(_id)} className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M3 6v18h18v-18h-18zm5 14c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm5 0c0 .552-.448 1-1 1s-1-.448-1-1v-10c0-.552.448-1 1-1s1 .448 1 1v10zm4-18v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.315c0 .901.73 2 1.631 2h5.712z"/></svg>
            <span>Delete</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default DashboardCard;
