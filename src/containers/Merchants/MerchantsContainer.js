import { connect } from 'react-redux';

import MerchantsComponent from '../../components/Merchants/MerchantsComponent';

import { merchantsDataSelector } from '../../redux/merchants/selector';
import { merchantDataSelector } from '../../redux/merchant/selector';

const mapStateToProps = state => ({
  merchants: merchantsDataSelector(state),
  merchantId: merchantDataSelector(state).id,
});

export default connect(mapStateToProps)(MerchantsComponent);
