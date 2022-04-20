import { bool, number, oneOfType, string } from "prop-types";
import bigNumber from "big-number";

export function EpochsField({ value, isBigInt }) {
  if (isBigInt) {
    return bigNumber(value).toString();
  }

  return value;
}

EpochsField.propTypes = {
  value: oneOfType([number, string]),
  isBigInt: bool,
};
