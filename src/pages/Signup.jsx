import React from "react";

const Signup = () => {
  return (
    <div>
      <div className="hero  bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
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
                  />
                </div>
                <div className="form-control">
                 <label className="label">
                    <span className="label-text">Password</span>
                  </label> 
                  <input
                    type="text"
                    placeholder="Password"
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="form-control">
                 <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label> 
                  <input
                    type="text"
                    placeholder="Confirm Password"
                    className="input input-bordered"
                  />
                  
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-green-950">Login</button>
                </div>
                <div className="form-control mt-6">
                  <button className="btn bg-orange-500 text-orange-950">Signup With Google</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
