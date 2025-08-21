import styled from "@emotion/styled";
import { OT2049 } from "../../libs/fonts/OT2049";

export const Container = styled.div({
  height: "100px",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderBottom: "2px solid black",
  fontFamily: OT2049.style.fontFamily,
  paddingLeft: "30px",
  paddingRight: "30px",
});

export const Nav = styled.div({});

export const Title = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});
