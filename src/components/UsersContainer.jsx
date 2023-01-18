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
