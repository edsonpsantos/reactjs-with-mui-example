import React, { useEffect, useMemo } from "react";
import { LayoutPageBase } from "../../shared/layouts";

import { ToolListing } from "../../shared/components";
import { useSearchParams } from "react-router-dom";
import { PeopleService } from "../../shared/services/api/people/PeopleService";
import { useDebounce } from "../../shared/hooks";

export const PeopleList: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { debounce } = useDebounce(2000, false);

  const search = useMemo(() => {
    return searchParams.get("search") || "";
  }, [searchParams]);

  useEffect(() => {
    debounce(() => {
      PeopleService.getAll(1, search).then((result) => {
        if (result instanceof Error) {
          alert(result.message);
          return;
        } else {
          console.log(result);
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
      Cities
    </LayoutPageBase>
  );
};
