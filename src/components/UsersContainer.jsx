import React from "react";
import { Link } from "react-router-dom";

const UsersContainer = ({ users }) => {
  return (
    <div className="">
      {users &&
        users?.map((user, idx) =>
          user?.login ? (
            <div
              key={idx}
              
            >
              

              
              <Link to={`/${user?.login}`}>
                <span
                  className="text-gray-200 
                  font-semibold rounded block px-4 py-1 bg-teal-600 my-3 tracking-wide"
                >
                  View
                </span>
              </Link>
            </div>
          ) : (
            <div className="text-lg">No user</div>
          )
        )}
    </div>
  );
};

export default UsersContainer;
