import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { func } from "prop-types";

export function EpochsStartBlockSearch({ onSearch, onClear }) {
  const [val, setVal] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        if (val.trim() && !isNaN(parseInt(val, 10))) {
          onSearch(parseInt(val, 10));
        } else {
          onClear();
        }
      }}
    >
      <Box display="flex">
        <TextField
          placeholder="Start block"
          type="number"
          value={val}
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <Button type="submit">Search</Button>
      </Box>
    </form>
  );
}

EpochsStartBlockSearch.propTypes = {
  onSearch: func,
  onClear: func,
};
