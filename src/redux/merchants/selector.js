import { createSelector } from 'reselect';

const merchantsStateSelector = state => state.merchants;
const routerStateSelector = state => state.router;

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

export const currentMerchantSelector = createSelector(
  merchantsDataSelector,
  routerStateSelector,
  (merchants, router) => {
    const merchantId = router.location.pathname.replace(/^\//, '');
    if (!merchantId) {
      return merchants[0];
    }

    const current = merchants.find(merchant => merchant.id.toLowerCase() === merchantId.toLowerCase());

    return current || { id: merchantId };
  }
);
