import React from "react";
import { number, oneOfType, shape, string } from "prop-types";
import { TableCell, TableRow } from "@mui/material";
import { EPOCH_FIELDS } from "../../constants";
import { EpochsField } from "../EpochsField";

export function EpochsRow({ epoch }) {
  return (
    <TableRow>
      {EPOCH_FIELDS.map(({ key, isBigInt }) => {
        return (
          <TableCell key={key}>
            <EpochsField value={epoch[key]} isBigInt={isBigInt} />
          </TableCell>
        );
      })}
    </TableRow>
  );
}

EpochsRow.propTypes = {
  epoch: shape({
    id: string,
    startBlock: oneOfType([string, number]),
  }),
};
