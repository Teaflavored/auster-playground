import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableBody,
  TextField,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import Pagination from "@mui/material/Pagination";
import { EPOCHES_QUERY } from "../../apollo/queries";
import {
  EPOCH_PER_PAGE,
  EPOCH_FIELDS,
  EPOCH_SORT_KEYS,
  EPOCH_SORT_BY_DIRECTION,
} from "../../constants";
import { EpochsRow } from "../EpochsRow";
import { EpochsStartBlockSearch } from "../EpochsStartBlockSearch";
import { EpochsHeader } from "../EpochsHeader";

export function EpochsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState(null);
  const [currentSortKey, setCurrentSortKey] = useState(
    EPOCH_SORT_KEYS.startBlock
  );
  const [currentSortDirection, setCurrentSortDirection] = useState(
    EPOCH_SORT_BY_DIRECTION.ASC
  );
  const { data, loading } = useQuery(EPOCHES_QUERY, {
    variables: {
      first: EPOCH_PER_PAGE,
      skip: (currentPage - 1) * EPOCH_PER_PAGE,
      orderBy: currentSortKey,
      orderDirection: currentSortDirection,
      where: filter,
    },
  });
  const epoches = data?.epoches || [];

  return (
    <Box display="flex" flexDirection="column">
      <EpochsStartBlockSearch
        onSearch={(searchValue) => {
          setFilter({
            startBlock: searchValue,
          });
        }}
        onClear={() => {
          setFilter(null);
        }}
      />
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          width="100%"
          alignItems="center"
          height="530px"
        >
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 600 }}>
            <TableHead>
              <TableRow>
                {EPOCH_FIELDS.map(({ key, label, isSortable, sortKey }) => (
                  <EpochsHeader
                    key={key}
                    currentSortKey={currentSortKey}
                    currentSortDirection={currentSortDirection}
                    sortKey={sortKey}
                    label={label}
                    isSortable={isSortable}
                    onSort={(field, direction) => {
                      setCurrentSortKey(field);
                      setCurrentSortDirection(direction);
                    }}
                  />
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {epoches.map((epoch) => (
                <EpochsRow key={epoch.id} epoch={epoch} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
      <Box padding="16px 0" justifyContent="center" display="flex">
        <Pagination
          page={currentPage}
          showLastButton={false}
          count={9999}
          onChange={(_, page) => {
            setCurrentPage(page);
          }}
        />
      </Box>
    </Box>
  );
}
