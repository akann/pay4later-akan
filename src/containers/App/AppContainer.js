import { connect } from 'react-redux';

import { fetchMerchants } from '../../redux/merchants/actions';
import AppComponent from '../../components/App/App';

import { merchantsStatusSelector } from '../../redux/merchants/selector';

const mapStateToProps = state => ({
  ...merchantsStatusSelector(state),
});

const mapDispatchToProps = dispatch => ({
  loadMerchants: () => dispatch(fetchMerchants()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppComponent);
