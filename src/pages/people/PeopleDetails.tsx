import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { LayoutPageBase } from "../../shared/layouts";
import { ToolbarDetails } from "../../shared/components";

export const PeopleDetails: React.FC = () => {
  const { id = "new" } = useParams<"id">();
  const navigate = useNavigate();

  const handleSave = () => {
    console.log("Save");
  };

  const handleDelete = () => {
    console.log("delete");
  };

  return (
    <LayoutPageBase
      title="People Details"
      toolbar={
        <ToolbarDetails
          textButtonNew="New"
          showButtonSaveAndBack
          showButtonDelete={id !== "new"}
          showButtonNew={id !== "new"}
          onClickButtonSave={handleSave}
          onClickButtonSaveAndBack={handleSave}
          onClickButtonDelete={handleDelete}
          onClickButtonBack={() => {
            navigate("/people");
          }}
          onClickButtonNew={() => {
            navigate("/people/details/new");
          }}
        ></ToolbarDetails>
      }
    >
      <p>People Details {id}</p>
    </LayoutPageBase>
  );
};
