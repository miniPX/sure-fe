import React, { PropsWithChildren } from "react";
import { TopNav } from "./topNav";
import { Footer } from "./footer";
import { MainContainer, Page } from "./style";

// main themes and elements here?

type MainLayoutProps = {
  showNav?: boolean;
};

export const MainLayout = ({
  children,
  showNav,
}: PropsWithChildren<MainLayoutProps>) => (
  <MainContainer>
    <TopNav showNav={showNav} />
    <Page>{children}</Page>
    <Footer />
  </MainContainer>
);
