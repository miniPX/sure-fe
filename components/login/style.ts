import styled from "@emotion/styled";
import { OT2049 } from "../../libs/fonts/OT2049";

export const LoginContainer = styled.div({
  height: "30vh",
  width: "40%",

  display: "flex",
  flexDirection: "column",
  // alignItems: "center",

  fontFamily: OT2049.style.fontFamily,
  fontSize: "18px",

  paddingTop: "100px",
  // backgroundColor: "beige",
});

export const LoginText = styled.div({
  width: "100%",
  marginBottom: "10px",
  paddingLeft: "15px", //pte - make constant
});

export const InputContainer = styled.div({
  width: "100%",
  height: "20px",
  borderRadius: "10px",
  border: "1px solid black",
  backgroundColor: "yellow",
});

export const LoginInput = styled.input({
  width: "calc(100% - 10px)",
  borderRadius: "15px",
  border: "1px solid black",
  paddingLeft: "15px",
  height: "30px",
  marginBottom: "30px",
});
