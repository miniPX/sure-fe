import styled from "@emotion/styled";
import { OT2049 } from "../../libs/fonts/OT2049";
import { MainPadding } from "../themes/consts";
import { CRIMSON } from "../../libs/fonts/CRIMSON";

export const Container = styled.div({
  height: "100px",
  width: "100vw",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderBottom: "1px solid black",
  fontFamily: OT2049.style.fontFamily,
  fontSize: "48px",
  paddingLeft: MainPadding,
  paddingRight: MainPadding,
});

export const Nav = styled.div({
  height: "100%",
  marginLeft: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginRight: "40px",
});

export const NavButton = styled.div({
  height: "38px",
  width: "127px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  marginLeft: "10px",
  marginRight: "10px",
  borderRadius: "19px",

  "&:hover": {
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  },
});

export const Title = styled.div({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
});

export const NavDrawer = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  borderBottom: "1px solid black",
  padding: MainPadding,
});

export const NavDrawerTitle = styled.div({
  fontFamily: OT2049.style.fontFamily,
  fontSize: "18px",
});

export const NavDrawerText = styled.div({
  whiteSpace: "pre-wrap",
  fontFamily: CRIMSON.style.fontFamily,
  paddingTop: "20px",
  fontSize: "14px",
});
