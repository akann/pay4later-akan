import { connect } from 'react-redux';

import MerchantLayoutComponent from '../../components/Merchant/MerchantLayoutComponent';

import { merchantStatusSelector, merchantDataSelector } from '../../redux/merchant/selector';
import { currentMerchantSelector } from '../../redux/merchants/selector';
import { fetchMerchant } from '../../redux/merchant/actions';

const mapStateToProps = state => ({
  status: merchantStatusSelector(state),
  currentMerchant: currentMerchantSelector(state),
  merchant: merchantDataSelector(state),
});

const mapDispatchToProps = dispatch => ({
  loadMerchant: link => dispatch(fetchMerchant(link)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MerchantLayoutComponent);
