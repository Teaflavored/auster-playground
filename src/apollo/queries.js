import { gql } from "@apollo/client";

export const EPOCHES_QUERY = gql`
  query getEpoches(
    $skip: Int
    $first: Int
    $orderBy: Epoch_orderBy
    $orderDirection: OrderDirection
    $where: Epoch_filter
  ) {
    epoches(
      skip: $skip
      first: $first
      orderBy: $orderBy
      orderDirection: $orderDirection
      where: $where
    ) {
      id
      startBlock
      endBlock
    }
  }
`;
