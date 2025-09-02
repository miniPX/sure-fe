import styled from "@emotion/styled";
import { MainPadding } from "../../themes/consts";
import { OT2049 } from "../../../libs/fonts/OT2049";

export const TradeTableContainer = styled.div({
  width: "100%",
  borderBottom: "1px solid black",
  paddingLeft: MainPadding,
});

export const TradeTableHeader = styled.div({
  height: "70px",
  width: "100%",
  display: "flex",
  fontFamily: OT2049.style.fontFamily,
  fontSize: "18px",
  flexDirection: "row",
  alignItems: "center",
  // backgroundColor: "yellow",
});

export const TradeTableSelectLabel = styled.div({
  display: "flex",
  flexDirection: "row",
  whiteSpace: "nowrap",
  marginRight: "10px",
});

export const TradeTableDropdownContainer = styled.div({
  height: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginRight: "15px",
});
