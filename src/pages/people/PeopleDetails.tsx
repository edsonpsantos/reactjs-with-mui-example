import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LinearProgress } from "@mui/material";
import { FormHandles } from "@unform/core";
import { Form } from "@unform/web";

import { PeopleService } from "../../shared/services/api/people/PeopleService";
import { LayoutPageBase } from "../../shared/layouts";
import { ToolbarDetails } from "../../shared/components";
import { VTextField } from "../../shared/forms";

interface IFormData {
  email: string;
  fullName: string;
  cityId: number;
}

export const PeopleDetails: React.FC = () => {
  const { id = "new" } = useParams<"id">();
  const navigate = useNavigate();

  const formRef = useRef<FormHandles>(null);

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
          // console.log(result);
          formRef.current?.setData(result);
        }
      });
    }
  }, [id]);

  const handleSave = async (data: IFormData) => {
    setIsLoading(true);
    if (id === "new") {
      await PeopleService.create(data).then((result) => {
        setIsLoading(false);
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          navigate(`/people/details/${result}`);
        }
      });
    } else {
      PeopleService.updateById(Number(id), { id: Number(id), ...data }).then(
        (result) => {
          setIsLoading(false);
          if (result instanceof Error) {
            alert(result.message);
            return;
          } else {
            setName(data.fullName);
          }
        }
      );
    }
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
          onClickButtonSave={() => formRef.current?.submitForm()}
          onClickButtonSaveAndBack={() => formRef.current?.submitForm()}
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
      <Form ref={formRef} onSubmit={handleSave}>
        <VTextField placeholder="Full Name" name="fullName" />
        <VTextField placeholder="E-mail" name="email" />
        <VTextField placeholder="City Id" name="cityId" />
      </Form>
      {isLoading && <LinearProgress variant="indeterminate" />}
    </LayoutPageBase>
  );
};
