import React, { useEffect, useState } from "react";
import {
  Container,
  Title,
  Nav,
  NavButton,
  NavDrawer,
  NavDrawerTitle,
  NavDrawerText,
} from "./style";
import {
  faqText,
  faqTitle,
  howText,
  howTitle,
  whyText,
  whyTitle,
} from "../utils/consts";

enum DrawerNav {
  NONE = "",
  WHY = "why",
  HOW = "how",
  FAQ = "FAQ",
}

const DrawerNavs = Object.values(DrawerNav);

export const TopNav = () => {
  const [drawer, setDrawer] = useState<DrawerNav>(DrawerNav.NONE);
  const [showDrawer, setShowDrawer] = useState(false);
  const [drawerText, setDrawerText] = useState("");
  const [drawerTitle, setDrawerTitle] = useState("");

  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  const setDrawerNav = (drawerNavButton: DrawerNav) =>
    setDrawer(drawerNavButton);
  const closeDrawerNav = () => setDrawer(DrawerNav.NONE);

  useEffect(() => {
    if (drawer === DrawerNav.WHY) {
      setDrawerTitle(whyTitle);
      setDrawerText(whyText);
    } else if (drawer === DrawerNav.HOW) {
      setDrawerTitle(howTitle);
      setDrawerText(howText);
    } else if (drawer === DrawerNav.FAQ) {
      setDrawerTitle(faqTitle);
      setDrawerText(faqText);
    } else {
      setDrawerText("");
      setDrawerTitle("");
    }

    if (drawer !== DrawerNav.NONE) {
      openDrawer();
    } else {
      closeDrawer();
    }
  }, [drawer]);

  const hoverStyle: React.CSSProperties = {
    backgroundColor: "black",
    color: "white",
    cursor: "pointer",
  };

  return (
    <>
      <Container>
        <Title>sure</Title>
        <Nav>
          {/* below button could be much prettier*/}
          {DrawerNavs.map((nav, i) =>
            nav !== "" ? (
              <NavButton
                key={i}
                style={drawer === nav ? hoverStyle : {}}
                onClick={() =>
                  nav === drawer ? closeDrawerNav() : setDrawerNav(nav)
                }
              >
                {nav}
              </NavButton>
            ) : (
              <></>
            )
          )}
          <NavButton>login</NavButton>
          <NavButton>signup</NavButton>
        </Nav>
      </Container>
      <NavDrawer style={{ display: showDrawer ? "flex" : "none" }}>
        <NavDrawerTitle>{drawerTitle}</NavDrawerTitle>
        <NavDrawerText>{drawerText}</NavDrawerText>
      </NavDrawer>
    </>
  );
};
