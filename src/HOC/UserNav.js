import React from "react";

function UserNav() {
  return (
    <div>
      <div className="d-flex">
        <button
          onClick={() => {
            window.location.href = "/signin";
          }}
          className="border-2 border-gray-400 px-3 py-2 rounded hover:bg-gray-300 hover:text-gray-700 font-black mr-2"
        >
          Login
        </button>

        <button
          onClick={() => {
            window.location.href = "/signup";
          }}
          className="border-2 border-gray-400 px-3 py-2 rounded hover:bg-gray-300 hover:text-gray-700 font-black"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

export default UserNav;
