import React from "react";
import { TableCell, TableSortLabel } from "@mui/material";
import { string, func, bool } from "prop-types";
import { EPOCH_FIELDS, EPOCH_SORT_BY_DIRECTION } from "../../constants";

export function EpochsHeader({
  label,
  isSortable,
  onSort,
  sortKey,
  currentSortDirection,
  currentSortKey,
}) {
  if (!isSortable) {
    return <TableCell>{label}</TableCell>;
  }

  return (
    <TableCell
      sortDirection={currentSortKey === sortKey ? currentSortDirection : false}
    >
      <TableSortLabel
        active={currentSortKey === sortKey}
        direction={currentSortKey === sortKey ? currentSortDirection : "asc"}
        onClick={() => {
          onSort(
            sortKey,
            currentSortDirection === EPOCH_SORT_BY_DIRECTION.ASC
              ? EPOCH_SORT_BY_DIRECTION.DESC
              : EPOCH_SORT_BY_DIRECTION.ASC
          );
        }}
      >
        {label}
      </TableSortLabel>
    </TableCell>
  );
}

EpochsHeader.propTypes = {
  sortKey: string,
  field: string,
  onSort: func,
  label: string,
  isSortable: bool,
  currentSortDirection: string,
  currentSortKey: string,
};
