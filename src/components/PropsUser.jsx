import React from "react";

const PropsUser = ({ user }) => {
  return (
    <>
      <h2>{user.name}</h2>
      <h3>{user.age}</h3>
      <h4>{user.address}</h4>
    </>
  );
};

export default PropsUser;
