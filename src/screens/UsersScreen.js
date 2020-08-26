import React, { useContext } from "react";
import { useSelector } from "react-redux";
const UsersScreen = () => {
  const posts = useSelector((state) => state.posts.items);

  return (
    <div>
      <div>{posts.length}</div>
    </div>
  );
};

export default UsersScreen;
