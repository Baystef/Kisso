import React from 'react';

const DashboardUserProfile = ({ user: { firstName, lastName, email, job } }) => {
  return (
    <div className="container my-auto mx-auto">
      <h1 style={{ fontFamily: '"Kite One", sans-serif'}} className="sm:text-3xl lg:text-6xl">Welcome, {firstName} {lastName}</h1>

      <div className="flex items-center justify-center mt-12">
        <div className="flex flex-col items-center sm:mr-5 lg:mr-10">
          <span>
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#718096" d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"/></svg>
          </span>
          <p style={{ fontFamily: '"Raleway", sans-serif'}} className="sm:text-xl lg:text-3xl text-gray-600">{email}</p>
        </div>

        <div className="flex flex-col items-center sm:ml-5 lg:ml-10">
          <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#718096" d="M9 6h-2v-2c0-1.104.896-2 2-2h6c1.104 0 2 .896 2 2v2h-2v-1.5c0-.276-.224-.5-.5-.5h-5c-.276 0-.5.224-.5.5v1.5zm7 6v2h8v8h-24v-8h8v-2h-8v-5h24v5h-8zm-2-1h-4v4h4v-4z"/></svg></span>
          <p style={{ fontFamily: '"Raleway", sans-serif'}} className="sm:text-xl lg:text-3xl capitalize text-gray-600">{job}</p>
        </div>
      </div>

    </div>

  )
}

export default DashboardUserProfile;
