import { connect } from 'react-redux';

import MerchantComponent from '../../components/Merchant/MerchantComponent';

import { merchantDataSelector } from '../../redux/merchant/selector';

const mapStateToProps = state => ({
  merchant: merchantDataSelector(state),
});

export default connect(mapStateToProps)(MerchantComponent);
