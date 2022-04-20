import { bool, number, oneOfType, string } from "prop-types";

export function EpochsField({ value, isBigInt }) {
  if (isBigInt) {
    return value;
  }

  return value;
}

EpochsField.propTypes = {
  value: oneOfType([number, string]),
  isBigInt: bool,
};
