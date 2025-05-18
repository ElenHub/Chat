import { Link } from "react-router-dom";
import { useState } from "react";
import useSignup from "../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = useSignup();

  const handleInputChange = (field) => (e) => {
    setInputs({ ...inputs, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto p-4">
      <div
        style={{
          backgroundColor: "var(--bgr-color)",
        }}
        className="w-full max-w-md p-6 rounded-lg shadow-md  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0"
      >
        <h1 className="text-3xl font-semibold text-center  mb-4">Sign Up</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full input input-bordered h-10"
              style={{ color: "#ccc" }}
              value={inputs.fullName}
              onChange={handleInputChange("fullName")}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Email
            </label>
            <input
              type="email"
              placeholder="johndoe@example.com"
              className="w-full input input-bordered h-10"
              style={{ color: "#ccc" }}
              value={inputs.email}
              onChange={handleInputChange("email")}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              style={{ color: "#ccc" }}
              value={inputs.password}
              onChange={handleInputChange("password")}
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              style={{ color: "#ccc" }}
              value={inputs.confirmPassword}
              onChange={handleInputChange("confirmPassword")}
              required
            />
          </div>

          {/* Link to Login */}
          <div className="mt-2">
            <Link
              to="/login"
              className="text-sm hover:underline hover:text-blue-600"
            >
              Already have an account?
            </Link>
          </div>

          {/* Submit Button */}
          <div className="mt-4">
            <button
              type="submit"
              className="btn btn-block btn-sm"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Sign Up"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
