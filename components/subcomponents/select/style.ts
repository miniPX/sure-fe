import styled from "@emotion/styled";
import { OT2049 } from "../../../libs/fonts/OT2049";

const SELECT_OPTION_HEIGHT = 43;

export const SelectContainer = styled.div({
  height: `${SELECT_OPTION_HEIGHT}px`,
  position: "relative",
  marginRight: "30px",
});

export const SelectButton = styled.div({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  height: `${SELECT_OPTION_HEIGHT}px`,
  paddingLeft: "40px",
  paddingRight: "40px",
  border: "1px solid black",
  borderRadius: `${SELECT_OPTION_HEIGHT / 2}px`,
  "&:hover": {
    // backgroundColor: "black",
    // color: "white",
    cursor: "pointer",
  },
});

export const SelectList = styled.div({
  height: "30px",
  //width: "100px", //pte
  //position: "absolute",
  top: 0,
  display: "flex",
  flexDirection: "column",
  backgroundColor: "white",
  marginRight: "50px",
  // zIndex: 10,
});

export const SelectOption = styled.div({
  display: "flex",
  position: "relative",
  flexDirection: "row",
  alignItems: "center",
  width: "100%",
  height: "100%",
  fontFamily: OT2049.style.fontFamily,
  fontSize: "18px",
  paddingTop: "5px",
  paddingBottom: "5px",
  paddingLeft: "45px",
  paddingRight: "20px",
  backgroundColor: "white",
  border: "1px solid black",
  "&:hover": {
    // backgroundColor: "black",
    // color: "white",
    cursor: "pointer",
  },
});

export const SelectedOptionIcon = styled.div({
  height: "100%",
  width: `${SELECT_OPTION_HEIGHT}px`,
  backgroundColor: "red",
  position: "absolute",
  left: 0,
  zIndex: 11,
});

export const SelectIcon = styled.div({
  height: "100%",
  width: `${SELECT_OPTION_HEIGHT}px`,
  backgroundColor: "red",
});
