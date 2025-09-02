import React, { useEffect } from "react";
import { LoginContainer, LoginText, LoginInput } from "./style";
import { MainLayout } from "../main/layout";

export const Login = () => {
  useEffect(() => console.log("LOGIN PAGE"));

  return (
    <MainLayout>
      <LoginContainer>
        <LoginText>email</LoginText>
        <LoginInput />
        <LoginText>password</LoginText>
        <LoginInput type="password" />
      </LoginContainer>
    </MainLayout>
  );
};
