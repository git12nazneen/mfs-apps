import axios from "axios";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:5000/user', data);
      console.log("User data", response.data);
    } catch (error) {
      console.error('Error register user', error);
    }
  }

  return (
    <div>
      <section className="bg-gray-200 dark:bg-gray-900">
        <div className="container flex flex-col items-center justify-center min-h-screen px-6 mx-auto">
          <div className="flex justify-center mx-auto">
            <img
              className="w-auto h-7 sm:h-8"
              src="https://merakiui.com/images/logo.svg"
              alt=""
            />
          </div>

          <h1 className="mt-4 text-2xl font-semibold tracking-wide text-center text-gray-800 capitalize md:text-3xl dark:text-white">
            Welcome
          </h1>

          <div className="w-full max-w-md mx-auto mt-6">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Name
                </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  placeholder="Enter your name"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.name ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Pin
                </label>
                <input
                  type="tel"
                  {...register("pin", {
                    required: "Pin is required",
                    pattern: {
                      value: /^\d{5}$/,
                      message: "Pin must be exactly 5 digits",
                    },
                  })}
                  placeholder="Enter your pin"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.pin ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.pin && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.pin.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Mobile Number
                </label>
                <input
                  type="tel"
                  {...register("mobile", {
                    required: "Mobile number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Mobile number must be exactly 10 digits",
                    },
                  })}
                  placeholder="Enter your mobile number"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.mobile ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.mobile && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mobile.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required" })}
                  placeholder="Enter your email"
                  className={`block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border ${
                    errors.email ? "border-red-500" : "border-gray-200"
                  } rounded-lg dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <button className="w-full px-6 py-3 mt-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Continue
              </button>

              <div className="mt-6 text-center">
                <Link
                  to="/"
                  className="text-sm text-blue-500 hover:underline dark:text-blue-400"
                >
                  Don’t have an account yet? Sign up
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register;
