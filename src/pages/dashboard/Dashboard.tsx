import React from "react";
import { LayoutPageBase } from "../../shared/layouts";
import { ToolbarDetails } from "../../shared/components";

export const Dashboard = () => {
  return (
    <LayoutPageBase title="Home Page" toolbar={<ToolbarDetails />}>
      Testing...
    </LayoutPageBase>
  );
};
