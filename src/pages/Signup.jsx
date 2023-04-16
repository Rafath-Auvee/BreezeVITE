import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Loading from "./../components/Loading";
import auth from "./../firebase/firebase.config";
import toast, { Toaster } from 'react-hot-toast';
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

const Signup = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  let signInError;

  if (loading || gLoading) {
    return <Loading></Loading>;
  }

  if (error || gError) {
    signInError = (
      <p className="text-red-500">
        <small>{error?.message || gError?.message}</small>
      </p>
    );
  }

  if (user || gUser) {
    toast.success("Welcome User")
    navigate("/");
  }
  if (error) {
    toast.error("Error in sign up")
    console.log("Error");
    navigate("/");
  }

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <h1 className="text-4xl mb-10">Create You Account</h1>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Email"
                      className="input input-bordered"
                      {...register("email", {
                        required: {
                          value: true,
                          message: "Email is Required",
                        },
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "Provide a valid Email",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-500">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Password"
                      className="input input-bordered"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters or longer",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-500">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary text-green-950">
                      Sign Up
                    </button>
                  </div>

                  <div className="mt-2 divider divide-black"></div>

                  <div className="form-control">
                    <button className="btn bg-orange-500 text-orange-950">
                      Signup With Google
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
