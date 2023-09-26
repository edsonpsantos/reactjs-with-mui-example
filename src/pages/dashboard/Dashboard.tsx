import React from "react";
import { LayoutPageBase } from "../../shared/layouts";
import { ToolListing } from "../../shared/components";

export const Dashboard = () => {
  return (
    <LayoutPageBase title="Home Page" toolbar={<ToolListing showInputSearch />}>
      Testing...
    </LayoutPageBase>
  );
};
