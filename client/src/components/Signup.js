import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [job, setJob] = useState('');
  const history = useHistory();

  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup({ email, password, firstName, lastName, job })
    history.push("/dashboard")
  }

  return (
    <div className="bg-grey-lighter h-screen font-sans">
      <div className="container mx-auto h-full flex justify-center items-center">
        <div className="w-1/3">
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 py-8 pt-8">
            <div className="px-4 pb-4">
              <label htmlFor="email" className="text-sm text-left capitalize block font-bold pb-2">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 " placeholder="Johnbull@example.com" required />
            </div>
            <div className="px-4 pb-4">
              <label htmlFor="password" className="text-sm text-left capitalize block font-bold pb-2">Password</label>
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your password" required />
            </div>
            <div className="px-4 pb-4">
              <label htmlFor="firstname" className="text-sm text-left capitalize block font-bold pb-2">Firstname</label>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} name="firstName" id="firstname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your firstname" required />
            </div>
            <div className="px-4 pb-4">
              <label htmlFor="lastname" className="text-sm text-left capitalize block font-bold pb-2">Lastname</label>
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} name="lastname" id="lastname" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your lastname" />
            </div>
            <div className="px-4 pb-4">
              <label htmlFor="job" className="text-sm text-left capitalize block font-bold pb-2">Job</label>
              <input type="text" value={job} onChange={(e) => setJob(e.target.value)} name="job" id="job" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300" placeholder="Enter your job" />
            </div>
            <div>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Sign Up</button>
            </div>
          </form>
          <div className="text-center">
            <p className="text-grey-dark text-sm">Already have an account? <Link to='/signin' className="no-underline text-blue font-bold">Sign in</Link>.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
