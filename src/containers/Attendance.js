import { connect } from 'react-redux';

import { setColumns } from '../actions/columns';
import { setRate } from '../actions/rate';
import { setSchoolboy } from '../actions/schoolboy';

import Attendance from '../components/Attendance';

const mapStateToProps = state => ({
   columns: state.columns.items,
   rate: state.rate.items,
   schoolboy: state.schoolboy.items,
});

const mapDispatchToProps = dispatch => ({
   setColumns: columns => dispatch(setColumns(columns)),
   setRate: rate => dispatch(setRate(rate)),
   setSchoolboy: schoolboy => dispatch(setSchoolboy(schoolboy)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Attendance);