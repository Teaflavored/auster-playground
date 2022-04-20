import React, { useState } from "react";
import {
  Box,
  CircularProgress,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
} from "@mui/material";
import { useQuery } from "@apollo/client";
import { EPOCHES_QUERY } from "../../apollo/queries";
import {
  EPOCH_PER_PAGE,
  EPOCH_FIELDS,
  EPOCH_FIELD_TO_LABEL,
  EPOCH_SORT_KEYS,
} from "../../constants";
import { EpochsRow } from "../EpochsRow";

export function EpochsTable() {
  const [currentPage, setCurrentPage] = useState(0);
  const { data, loading } = useQuery(EPOCHES_QUERY, {
    variables: {
      first: EPOCH_PER_PAGE,
      skip: currentPage * EPOCH_PER_PAGE,
      orderBy: EPOCH_SORT_KEYS.startBlock,
    },
  });
  const epoches = data?.epoches || [];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {EPOCH_FIELDS.map(({ key }) => (
              <TableCell key={key}>{EPOCH_FIELD_TO_LABEL[key]}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow sx={{ width: "100%", position: "relative", height: 100 }}>
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
  );
}
