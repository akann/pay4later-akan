import { createSelector } from 'reselect';

const merchantStateSelector = state => state.merchant;

const stateDataSelector = createSelector(merchantStateSelector, ({ data }) => data);

const transactionsSelector = createSelector(stateDataSelector, ({ pricing, transactions }) =>
  transactions.map(({ description, date, price }) => {
    const subsidy = price < pricing.discount_cutoff ? pricing.subsidy : pricing.discount_subsidy;

    return {
      date: date.replace(/(.+)T(.+:.+):.+/, (_, day, time) => `${day} ${time}`),
      description,
      price,
      subsidy: price * (subsidy / 100),
    };
  })
);

export const merchantDataSelector = createSelector(
  stateDataSelector,
  transactionsSelector,
  ({ name, pricing, merchant_id }, transactions) => ({
    id: merchant_id,
    name,
    subsidyTotal: transactions.reduce((acc, curr) => acc + curr.subsidy, 0),
    transactionsCount: transactions.length,
    transactionsPriceTotal: transactions.reduce((acc, curr) => acc + curr.price, 0),
    transactions: transactions.sort((a, b) => a.description.localeCompare(b.description)),
  })
);

export const merchantStatusSelector = createSelector(merchantStateSelector, ({ pending, errorMessage, errorCode }) => ({
  pending,
  errorMessage,
  errorCode,
}));
