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
import { EpochsHeader } from "../EpochsHeader";

export function EpochsTable() {
  const [currentPage, setCurrentPage] = useState(1);
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
    },
  });
  const epoches = data?.epoches || [];

  return (
    <Box display="flex" flexDirection="column">
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
            {loading ? (
              <TableRow
                sx={{ width: "100%", position: "relative", height: 530 }}
              >
                <Box
                  display="flex"
                  justifyContent="center"
                  width="100%"
                  position="absolute"
                  top={0}
                  right={0}
                  bottom={0}
                  left={0}
                  alignItems="center"
                >
                  <CircularProgress />
                </Box>
              </TableRow>
            ) : (
              epoches.map((epoch) => <EpochsRow key={epoch.id} epoch={epoch} />)
            )}
          </TableBody>
        </Table>
      </TableContainer>
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
