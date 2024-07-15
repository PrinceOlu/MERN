import { FiMail, FiLock } from "react-icons/fi";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CiUser } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { registerAPI } from "../services/userService";

//! Validation schema
const validationSchema = Yup.object({
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: Yup.string().required("Password is required"),
  username: Yup.string().required("Username is required"),
});

const Register = () => {
  // Instance of navigate
  const navigate = useNavigate();

  // Mutation for registration
  const mutation = useMutation({
    mutationFn: registerAPI,
  });

  //! Handle form using formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      username: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      try {
        await mutation.mutateAsync(values);
        // Redirect to login page on successful registration
        navigate("/login");
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-lg shadow-xl">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Already have an account?
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={formik.handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div className="mb-4">
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <CiUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="username"
                  id="username"
                  {...formik.getFieldProps("username")}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Username"
                />
                {formik.touched.username && formik.errors.username ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.username}
                  </div>
                ) : null}
              </div>
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="sr-only">
                Email Address
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  {...formik.getFieldProps("email")}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 mt-2 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Email address"
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
                ) : null}
              </div>
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  {...formik.getFieldProps("password")}
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 p-2 mt-2 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Password"
                />
                {formik.touched.password && formik.errors.password ? (
                  <div className="text-red-500 text-sm">
                    {formik.errors.password}
                  </div>
                ) : null}
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
