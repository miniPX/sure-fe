import React, { useEffect } from "react";
import { LoginContainer } from "./style";
import { MainLayout } from "../main/layout";

export const Login = () => {
  useEffect(() => console.log("LOGIN PAGE"));

  return (
    <MainLayout>
      <LoginContainer />
    </MainLayout>
  );
};
