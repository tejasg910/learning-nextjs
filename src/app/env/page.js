import React from "react";

const page = () => {
  return (
    <div>
      <h5>{process.env.NODE_ENV}The is default env</h5>

      <h5>{process.env.DB_URL}The is custom env</h5>
      <h5>{process.env.NAME}The is custom env</h5>
    </div>
  );
};

export default page;
