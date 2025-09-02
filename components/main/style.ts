import styled from "@emotion/styled";
import { OT2049 } from "../../libs/fonts/OT2049";
import { MainPadding } from "../themes/consts";
import { CRIMSON } from "../../libs/fonts/CRIMSON";

// definitely some cleaning up to do here

const headerHeight = 100;
const footerHeight = 48;

export const MainContainer = styled.div({
  width: "100vw",
});

export const Container = styled.div({
  height: `${headerHeight}px`,
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  borderBottom: "1px solid black",
  fontFamily: OT2049.style.fontFamily,
  fontSize: "48px",
  boxSizing: "border-box",
  paddingLeft: MainPadding,
  paddingRight: MainPadding,
});

export const Page = styled.div({
  width: "100%",
  minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const Nav = styled.div({
  height: "100%",
  marginLeft: "auto",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
});

export const NavButton = styled.div({
  height: "38px",
  width: "127px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
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
  "&:hover": {
    cursor: "pointer",
  },
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

export const FooterContainer = styled.div({
  marginTop: "auto",
  bottom: 0,
  height: `${footerHeight}px`,
  width: "100%",
  boxSizing: "border-box",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
  justifyContent: "space-between",
  fontFamily: OT2049.style.fontFamily,
  fontSize: "18px",
  paddingLeft: MainPadding,
  paddingRight: MainPadding,
  borderTop: "1px solid black",
});

export const FooterCell = styled.div({
  height: "100%",
  display: "flex",
  alignItems: "center",
  flexDirection: "row",
});
