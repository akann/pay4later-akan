import { createSelector } from 'reselect';

const merchantsStateSelector = state => state.merchants;

export const merchantsDataSelector = createSelector(merchantsStateSelector, ({ data }) =>
  data
    .sort((a, b) => a.name.localeCompare(b.name))
    .map(({ merchant_id: id, name, _links }) => ({
      id,
      name,
      link: _links.self.href,
    }))
);

export const merchantsStatusSelector = createSelector(
  merchantsStateSelector,
  ({ pending, errorMessage, errorCode }) => ({
    pending,
    errorMessage,
    errorCode,
  })
);
