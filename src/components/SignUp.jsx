import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div>
      <div className="w-full my-20 max-w-sm mx-auto overflow-hidden bg-gray-200 rounded-lg shadow-md dark:bg-gray-800">
        <div className="px-6 py-4">
          <p className="mt-1 text-center text-gray-500 dark:text-gray-400">Login or create account</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full mt-4">
              <input
                className={`block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 ${errors.email ? 'border-red-500' : ''}`}
                type="email"
                placeholder="Email Address"
                aria-label="Email Address"
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <div className="w-full mt-4">
              <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Pin</label>
              <input
                type="tel"
                name="pin"
                pattern="\d{5}"
                placeholder="Enter your pin"
                className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 ${errors.pin ? 'border-red-500' : ''}`}
                {...register('pin', {
                  required: 'Pin is required',
                  pattern: { value: /^\d{5}$/, message: 'Pin must be exactly 5 digits' }
                })}
              />
              {errors.pin && <p className="text-red-500 text-sm mt-1">{errors.pin.message}</p>}
            </div>

            <div className="flex items-center justify-between mt-4">
              <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign In
              </button>
            </div>
          </form>
        </div>

        <div className="flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
          <span className="text-sm text-gray-600 dark:text-gray-200">Don't have an account?</span>
          <Link to='/register' className="mx-2 text-sm font-bold text-blue-500 dark:text-blue-400 hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
