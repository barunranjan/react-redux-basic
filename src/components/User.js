import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "../redux/users/userAction";
import UserList from "./UserList.js";

const User = (props) => {
  console.log(props);
  useEffect(() => {
    props.fetchUsers();
  }, []);
  return (
    <div>
      <UserList users={props.userData.users} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userData: state.users,
  };
};
const mapActionToProps = {
  fetchUsers: fetchUsers,
};

export default connect(mapStateToProps, mapActionToProps)(User);
