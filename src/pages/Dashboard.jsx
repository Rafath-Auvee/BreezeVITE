import React from "react";

const Dashboard = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello World</h1>
            <div className="mt-2 divider divide-black"></div>
            <button className="btn btn-primary mx-20">
              <a
                href="https://github.com/Rafath-Auvee/BreezeVITE"
                target="_blank"
                rel="noopener noreferrer"
              >
                Give me a star ⭐
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
