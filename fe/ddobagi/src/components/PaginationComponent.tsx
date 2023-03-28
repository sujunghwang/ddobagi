import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pagination } from "@mui/material";
import { useSearchParams } from "react-router-dom";

type PaginationProps = {
  total: number;
  itemsPerPage?: number;
  currentPage?: number;
  onChange?: (event: any, page: number) => void;
};

const LIMIT = 8;

const PaginationComponent: React.FC<PaginationProps> = ({
  total,
  itemsPerPage = LIMIT,
  currentPage = 1,
  onChange,
}) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const current = parseInt(
    searchParams.get("page") || currentPage.toString(),
    10
  );

  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    searchParams.set("page", value.toString());
    navigate({ search: searchParams.toString() });
    onChange?.(_, value);
  };

  return (
    <Pagination
      count={Math.ceil(total / itemsPerPage)}
      page={current}
      onChange={handleChange}
      showFirstButton
      showLastButton
    />
  );
};

export default PaginationComponent;
