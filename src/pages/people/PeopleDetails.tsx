/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { LayoutPageBase } from "../../shared/layouts";
import { ToolbarDetails } from "../../shared/components";
import { PeopleService } from "../../shared/services/api/people/PeopleService";
import { LinearProgress } from "@mui/material";

export const PeopleDetails: React.FC = () => {
  const { id = "new" } = useParams<"id">();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");

  useEffect(() => {
    setIsLoading(true);
    if (id !== "new") {
      PeopleService.getById(Number(id)).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
          navigate("/people");
        } else {
          setName(result.fullName);
          console.log(result);
        }
      });
    }
  }, [id]);

  const handleSave = () => {
    console.log("Save");
  };

  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete?")) {
      PeopleService.deleteById(id).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          alert("Registration deleted successfully");
          navigate("/people");
        }
      });
    }
  };

  return (
    <LayoutPageBase
      title={id === "new" ? "New Person" : name}
      toolbar={
        <ToolbarDetails
          textButtonNew="New"
          showButtonSaveAndBack
          showButtonDelete={id !== "new"}
          showButtonNew={id !== "new"}
          onClickButtonSave={handleSave}
          onClickButtonSaveAndBack={handleSave}
          onClickButtonDelete={() => handleDelete(Number(id))}
          onClickButtonBack={() => {
            navigate("/people");
          }}
          onClickButtonNew={() => {
            navigate("/people/details/new");
          }}
        ></ToolbarDetails>
      }
    >
      {isLoading && <LinearProgress variant="indeterminate" />}

      <p>People Details {id}</p>
    </LayoutPageBase>
  );
};
