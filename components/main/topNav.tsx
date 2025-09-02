import React, { PropsWithChildren, useEffect, useState } from "react";
import { useRouter } from "next/router";
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

type TopNavProps = {
  showNav?: boolean;
};

export const TopNav = ({ showNav }: PropsWithChildren<TopNavProps>) => {
  const router = useRouter();

  const navigateToLogin = () => router.push("/login");
  const navigateToLanding = () => router.push("/");

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
        <Title onClick={() => navigateToLanding()}>sure</Title>
        {showNav && (
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
            <NavButton onClick={() => navigateToLogin()}>login</NavButton>
            <NavButton>signup</NavButton>
          </Nav>
        )}
      </Container>
      <NavDrawer style={{ display: showDrawer ? "flex" : "none" }}>
        <NavDrawerTitle>{drawerTitle}</NavDrawerTitle>
        <NavDrawerText>{drawerText}</NavDrawerText>
      </NavDrawer>
    </>
  );
};
