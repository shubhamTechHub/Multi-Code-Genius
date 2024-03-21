import React, { useState } from "react";
import { Button, UserInputContainer } from "./StyledComponent";

const Form = () => {
  const [data, setData] = useState({
    email: "",
    fullname: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({
      email: "",
      fullname: "",
      password: "",
    });
    console.log(data);
  };

  const renderEmailField = () => (
    <UserInputContainer>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        onChange={(e) => setData({ ...data, email: e.target.value })}
        value={data.email}
      />
    </UserInputContainer>
  );
  const renderFullnameField = () => (
    <UserInputContainer>
      <label htmlFor="fullname">FullName</label>
      <input
        type="text"
        id="fullname"
        onChange={(e) => setData({ ...data, fullname: e.target.value })}
        value={data.fullname}
      />
    </UserInputContainer>
  );

  const renderPasswordField = () => (
    <UserInputContainer>
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        onChange={(e) => setData({ ...data, password: e.target.value })}
        value={data.password}
      />
    </UserInputContainer>
  );

  return (
    <form onSubmit={handleSubmit}>
      {renderEmailField()}
      {renderFullnameField()}
      {renderPasswordField()}
      <Button type="submit">Sign Up</Button>
    </form>
  );
};

export default Form;
