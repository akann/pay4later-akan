import { connect } from 'react-redux';

import MerchantsComponent from '../../components/Merchants/MerchantsComponent';

import { fetchMerchant } from '../../redux/merchant/actions';
import { merchantsDataSelector } from '../../redux/merchants/selector';
import { merchantDataSelector } from '../../redux/merchant/selector';

const mapStateToProps = state => ({
  merchants: merchantsDataSelector(state),
  merchantId: merchantDataSelector(state).id,
});

const mapDispatchToProps = dispatch => ({
  loadMerchant: link => dispatch(fetchMerchant(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MerchantsComponent);
