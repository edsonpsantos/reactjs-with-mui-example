import React, { useEffect, useMemo, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useSearchParams } from "react-router-dom";

import {
  IListPerson,
  PeopleService,
} from "../../shared/services/api/people/PeopleService";
import { ToolListing } from "../../shared/components";
import { LayoutPageBase } from "../../shared/layouts";
import { useDebounce } from "../../shared/hooks";

export const PeopleList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce();

  const [rows, setRows] = useState<IListPerson[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const search = useMemo(() => {
    return searchParams.get("search") || "";
  }, [searchParams]);

  useEffect(() => {
    setIsLoading(true);
    debounce(() => {
      PeopleService.getAll(1, search).then((result) => {
        setIsLoading(false);

        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          // console.log(result);
          setRows(result.data);
          setTotalCount(result.totalCount);
        }
      });
    });
  }, [search]);

  return (
    <LayoutPageBase
      title="List of People"
      toolbar={
        <ToolListing
          showInputSearch
          textButtonNew="New Person"
          textSearch={search}
          onChangeSearchText={(text) =>
            setSearchParams({ search: text }, { replace: true })
          }
        ></ToolListing>
      }
    >
      <TableContainer
        component={Paper}
        variant="outlined"
        sx={{ margin: 1, width: "auto" }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Actions</TableCell>
              <TableCell>FullName</TableCell>
              <TableCell>E-mail</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell></TableCell>
                <TableCell>{row.fullName}</TableCell>
                <TableCell>{row.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </LayoutPageBase>
  );
};
