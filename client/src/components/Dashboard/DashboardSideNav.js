import React from 'react';
import { NavLink } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext';

const DashboardSideNav = ({ match }) => {
  const { user, logout } = useAuth();

  return (
    <>
      <div className="flex flex-row border-b items-center justify-between pb-2">
        {/* <!-- Header --> */}
        <span className="text-lg font-semibold capitalize dark:text-gray-300">
          Profile
			  </span>

        <span className="relative ">
          <a
            className="hover:text-green-500 dark-hover:text-green-300
					 text-gray-600 dark:text-gray-300"
            href="inbox/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round">
              <path
                d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </a>
          <div
            className="absolute w-2 h-2 rounded-full bg-green-500
					dark-hover:bg-green-300 right-0 mb-5 bottom-0"></div>
        </span>

      </div>

      <div className="mt-8">
        {/* <!-- User info --> */}
        <img
          className="h-12 w-12 rounded-full object-cover mx-auto"
          src="https://appzzang.me/data/editor/1608/f9c387cb6bd7a0b004f975cd92cbe2d9_1471626325_6802.png"
          alt="enoshima profile" />
        <h2
          className="mt-4 text-xl dark:text-gray-300 font-extrabold capitalize">
          Hello {user.firstName}
        </h2>
        <span className="text-sm dark:text-gray-300">
          <span className="font-semibold text-green-600 dark:text-green-300">
            Admin
				 </span>
        </span>
      </div>

      <ul className="mt-2 text-gray-600">
        {/* <!-- Links --> */}
        <li className="mt-5">
          <NavLink exact to={match.url}
            className="flex pl-4 -ml-4 items-center"
            activeClassName="shadow py-2 bg-white dark:bg-gray-200 rounded-lg"
          >
            <svg
              className="fill-current h-5 w-5 dark:text-gray-300"
              viewBox="0 0 24 24">
              <path
                d="M16 20h4v-4h-4m0-2h4v-4h-4m-6-2h4V4h-4m6
							4h4V4h-4m-6 10h4v-4h-4m-6 4h4v-4H4m0 10h4v-4H4m6
							4h4v-4h-4M4 8h4V4H4v4z"></path>
            </svg>
            <span className="ml-2 capitalize font-medium">
              profile
					  </span>
          </NavLink>
        </li>

        <li className="mt-5">
          <NavLink to={`${match.url}/users`}
            className="flex pl-4 -ml-4 items-center "
            activeClassName="shadow py-2 bg-white dark:bg-gray-200 rounded-lg"
          >
            <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
              <path
                d="M12 4a4 4 0 014 4 4 4 0 01-4 4 4 4 0 01-4-4 4 4 0
							014-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4
							8-4z"></path>
            </svg>
            <span className="ml-2 capitalize font-medium">users</span>
          </NavLink>
        </li>

        <li className="mt-5">
          <NavLink to={`${match.url}/add-new`}
            className="flex pl-4 -ml-4 items-center"
            activeClassName="shadow py-2 bg-white dark:bg-gray-200 rounded-lg"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
            <span className="ml-2 capitalize font-medium">
              Add User
					  </span>
          </NavLink>
        </li>

        <li className="mt-5">
          <NavLink to={`${match.url}/settings`}
            className="flex pl-4 -ml-4 items-center"
            activeClassName="shadow py-2 bg-white dark:bg-gray-200 rounded-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M24 14v-4h-3.23c-.229-1.003-.624-1.94-1.156-2.785l2.286-2.286-2.83-2.829-2.286 2.286c-.845-.532-1.781-.928-2.784-1.156v-3.23h-4v3.23c-1.003.228-1.94.625-2.785 1.157l-2.286-2.286-2.829 2.828 2.287 2.287c-.533.845-.928 1.781-1.157 2.784h-3.23v4h3.23c.229 1.003.624 1.939 1.156 2.784l-2.286 2.287 2.829 2.829 2.286-2.286c.845.531 1.782.928 2.785 1.156v3.23h4v-3.23c1.003-.228 1.939-.624 2.784-1.156l2.286 2.286 2.828-2.829-2.285-2.286c.532-.845.928-1.782 1.156-2.785h3.231zm-12 2c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z"/></svg>
            <span className="ml-2 capitalize font-medium">
              Settings
					  </span>
          </NavLink>
        </li>

      </ul>

      <div  className="mt-auto flex items-center text-red-700 dark:text-red-400">
        <p onClick={logout} className="flex items-center">
          <svg className="fill-current h-5 w-5" viewBox="0 0 24 24">
            <path
              d="M16 17v-3H9v-4h7V7l5 5-5 5M14 2a2 2 0 012
						2v2h-2V4H5v16h9v-2h2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V4a2 2
						0 012-2h9z"></path>
          </svg>
          <span className="ml-2 capitalize font-medium">log out</span>
        </p>
      </div>
    </>
  );
}

export default DashboardSideNav;
