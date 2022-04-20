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

export const EPOCH_PER_PAGE = 25;

export const EPOCH_FIELDS = Object.freeze([
  {
    key: "id",
    label: "id",
    isBigInt: false,
  },
  {
    key: "startBlock",
    label: "Start Block",
    isBigInt: true,
  },
  {
    key: "endBlock",
    label: "End Block",
    isBigInt: true,
  },
]);

export const EPOCH_FIELD_TO_LABEL = EPOCH_FIELDS.reduce(
  (result, fieldConfig) => ({
    ...result,
    [fieldConfig.key]: fieldConfig.label,
  }),
  {}
);
