import { connect } from 'react-redux';

import MerchantLayoutComponent from '../../components/Merchant/MerchantLayoutComponent';

import { merchantStatusSelector } from '../../redux/merchant/selector';

const mapStateToProps = state => ({
  ...merchantStatusSelector(state),
});

export default connect(mapStateToProps)(MerchantLayoutComponent);
