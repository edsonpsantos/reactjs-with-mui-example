import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Grid, LinearProgress, Paper, Typography } from "@mui/material";
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
    } else {
      setIsLoading(false);
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
        <Box
          margin={1}
          display="flex"
          flexDirection="column"
          component={Paper}
          variant="outlined"
        >
          <Grid container direction="column" padding={2} spacing={2}>
            {isLoading && (
              <Grid item>
                <LinearProgress variant="indeterminate" />
              </Grid>
            )}
            <Grid item>
              <Typography variant="h6">General</Typography>
            </Grid>
            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                <VTextField
                  fullWidth
                  label="Full Name"
                  name="fullName"
                  disabled={isLoading}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
            </Grid>

            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                <VTextField
                  fullWidth
                  label="E-mail"
                  name="email"
                  disabled={isLoading}
                />
              </Grid>
            </Grid>

            <Grid container item direction="row" spacing={2}>
              <Grid item xs={12} sm={12} md={6} lg={4} xl={2}>
                <VTextField
                  fullWidth
                  label="City"
                  name="cityId"
                  disabled={isLoading}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Form>
    </LayoutPageBase>
  );
};
