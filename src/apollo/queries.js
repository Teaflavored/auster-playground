import { gql } from "@apollo/client";

export const EPOCHES_QUERY = gql`
  query getEpoches($skip: Int, $first: Int, $orderBy: Epoch_orderBy) {
    epoches(skip: $skip, first: $first, orderBy: $orderBy) {
      id
      startBlock
      endBlock
    }
  }
`;
