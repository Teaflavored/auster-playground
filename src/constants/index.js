export const EPOCH_SORT_KEYS = Object.freeze({
  id: "id",
  startBlock: "startBlock",
  endBlock: "endBlock",
  signalledTokens: "signalledTokens",
  stakeDeposited: "stakeDeposited",
  queryFeesCollected: "queryFeesCollected",
  curatorQueryFees: "curatorQueryFees",
  queryFeeRebates: "queryFeeRebates",
  totalRewards: "totalRewards",
  totalIndexerRewards: "totalIndexerRewards",
  totalDelegatorRewards: "totalDelegatorRewards",
});

export const EPOCH_PER_PAGE = 10;

export const EPOCH_FIELDS = Object.freeze([
  {
    key: "id",
    label: "id",
    isBigInt: false,
    isSortable: true,
    sortKey: EPOCH_SORT_KEYS.id,
  },
  {
    key: "startBlock",
    label: "Start Block",
    isBigInt: true,
    isSortable: true,
    sortKey: EPOCH_SORT_KEYS.startBlock,
  },
  {
    key: "endBlock",
    label: "End Block",
    isBigInt: true,
    isSortable: true,
    sortKey: EPOCH_SORT_KEYS.endBlock,
  },
]);

export const EPOCH_SORT_BY_DIRECTION = Object.freeze({
  ASC: "asc",
  DESC: "desc",
});
