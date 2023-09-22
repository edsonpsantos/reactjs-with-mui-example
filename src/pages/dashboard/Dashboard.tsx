import React from "react";
import { LayoutPageBase } from "../../shared/layouts";
import { ToolBar } from "../../shared/components";

export const Dashboard = () => {
  return (
    <LayoutPageBase title="Home Page" toolbar={<ToolBar showInputSearch /> }>
      Testing...
    </LayoutPageBase>
  );
};
