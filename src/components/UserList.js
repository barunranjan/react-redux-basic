import React from "react";

const UserList = (props) => {
  console.log(props);
  return (
    <div>
      {props.users &&
        props.users.map((user) => {
          return <li>{user.name}</li>;
        })}
    </div>
  );
};

export default UserList;
