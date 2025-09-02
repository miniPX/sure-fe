import React from "react";
import { MainLayout } from "../main/layout";
import { TradeTable } from "../subcomponents/table";

export const Landing = () => (
  <MainLayout showNav={true}>
    <TradeTable />
  </MainLayout>
);
